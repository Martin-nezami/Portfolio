import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Credibility from "@/components/Credibility";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Credibility />
        <Work />
        <Experience />
        <Capabilities />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
