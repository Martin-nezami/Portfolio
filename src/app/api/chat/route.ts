import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { buildSystemPrompt } from "@/lib/portfolioContext";

const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 500;

// Best-effort per-instance rate limit. Serverless instances are ephemeral
// and multiple may run concurrently, so this is a soft guard against casual
// abuse, not a hard limit — watch usage on the Anthropic console.
const RATE_LIMIT = 15;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_WINDOW_MS,
  );
  if (timestamps.length >= RATE_LIMIT) {
    requestLog.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return false;
}

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Chat is not configured yet." },
      { status: 503 },
    );
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages — please try again later." },
      { status: 429 },
    );
  }

  const body = await req.json().catch(() => null);
  const messages: ChatMessage[] | undefined = body?.messages;

  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "No messages provided." }, { status: 400 });
  }

  const trimmed = messages.slice(-MAX_MESSAGES).filter(
    (m): m is ChatMessage =>
      (m.role === "user" || m.role === "assistant") &&
      typeof m.content === "string" &&
      m.content.length > 0 &&
      m.content.length <= MAX_MESSAGE_LENGTH,
  );

  if (trimmed.length === 0) {
    return NextResponse.json({ error: "Invalid message." }, { status: 400 });
  }

  const client = new Anthropic({ apiKey });

  try {
    const response = await client.messages.create({
      model: "claude-opus-5",
      max_tokens: 1024,
      system: buildSystemPrompt(),
      output_config: { effort: "low" },
      messages: trimmed.map((m) => ({ role: m.role, content: m.content })),
    });

    const text = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n");

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Something went wrong — please try again." },
      { status: 500 },
    );
  }
}
