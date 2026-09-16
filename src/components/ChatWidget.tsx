"use client";

import { useState, useRef, useEffect } from "react";
import { profile, suggestedQuestions } from "@/data/content";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const next: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong.");
      } else {
        setMessages([...next, { role: "assistant", content: data.reply }]);
      }
    } catch {
      setError("Couldn't reach the assistant — check your connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 z-50 flex h-[min(70vh,560px)] w-[min(92vw,380px)] flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_28px_90px_#00000047] sm:right-6">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <div>
              <p className="text-sm font-medium text-ink">Portfolio assistant</p>
              <p className="text-xs text-muted">Grounded in {profile.name}&apos;s CV and work</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1.5 text-muted hover:bg-surface-raised hover:text-ink"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 3L13 13M13 3L3 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.length === 0 && (
              <div className="space-y-2">
                <p className="text-sm text-muted">
                  Ask me about {profile.name}&apos;s projects, stack, experience, or availability.
                </p>
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="block w-full rounded-lg border border-line bg-surface-soft px-3 py-2 text-left text-sm text-ink-soft transition-colors hover:border-accent hover:text-ink"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-accent text-canvas"
                    : "bg-surface-raised text-ink-soft"
                }`}
              >
                {m.content}
              </div>
            ))}

            {loading && (
              <div className="max-w-[85%] rounded-xl bg-surface-raised px-3 py-2 text-sm text-muted">
                Thinking…
              </div>
            )}
            {error && <p className="text-xs text-red-400">{error}</p>}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-line p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Ask about ${profile.name.split(" ")[0]}…`}
              maxLength={500}
              className="flex-1 rounded-full border border-line-strong bg-surface-soft px-4 py-2 text-sm text-ink outline-none placeholder:text-muted-deep focus:border-accent"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-canvas transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 8L14 2L9.5 14L7.5 9L2 8Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                  fill="currentColor"
                />
              </svg>
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-canvas shadow-[0_10px_30px_#00000060] transition-transform hover:scale-105 sm:right-6"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 3L13 13M13 3L3 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H9l-4 4v-4H5.5C4.67 16 4 15.33 4 14.5v-9Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </>
  );
}
