"use client";

import { useState, useEffect } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const ACCENT_PRESETS = [
  "#f97316", // orange
  "#ec4899", // pink
  "#a78bfa", // purple
  "#22d3ee", // cyan
  "#22c55e", // green
  "#facc15", // yellow
  "#ef4444", // red
  "#ffffff", // white
] as const;

const TEMPLATES = [
  { id: "minimal-dark", name: "Minimal Dark" },
  { id: "light-minimal", name: "Light Minimal" },
  { id: "gradient-bold", name: "Gradient Bold" },
  { id: "terminal", name: "Terminal" },
  { id: "magazine", name: "Magazine" },
  { id: "polaroid", name: "Polaroid" },
  { id: "code-snippet", name: "Code Snippet" },
  { id: "postcard", name: "Postcard" },
  { id: "ticket", name: "Ticket" },
] as const;

export default function Home() {
  const [title, setTitle] = useState("Mon Portfolio");
  const [subtitle, setSubtitle] = useState("Développeur Web");
  const [template, setTemplate] = useState<string>("minimal-dark");
  const [accent, setAccent] = useState("#f97316");
  const [imgSrc, setImgSrc] = useState("");
  const [copied, setCopied] = useState(false);
  const [origin, setOrigin] = useState("");
  const [snippetCopied, setSnippetCopied] = useState(false);

  const buildUrl = () => {
    const params = new URLSearchParams({ title, subtitle, template, accent });
    return `/api/og?${params.toString()}`;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setImgSrc(buildUrl());
    }, 300);
    return () => clearTimeout(timer);
  }, [title, subtitle, template, accent]);

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const handleCopy = async () => {
    const fullUrl = `${window.location.origin}${buildUrl()}`;
    await navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async () => {
    const url = `${window.location.origin}${buildUrl()}`;
    const response = await fetch(url);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = `og-${title.replace(/\s+/g, "-").toLowerCase() || "image"}.png`;
    link.click();
    URL.revokeObjectURL(objectUrl);
  };

  const fullImageUrl = origin ? `${origin}${buildUrl()}` : buildUrl();
  const metaSnippet = `<meta property="og:image" content="${fullImageUrl}" />`;

  const handleCopySnippet = async () => {
    await navigator.clipboard.writeText(metaSnippet);
    setSnippetCopied(true);
    setTimeout(() => setSnippetCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
      {/* HEADER */}
      <header className="sticky top-0 z-20 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur-md">
        <div className="max-w-[1600px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 bg-orange-500" aria-hidden="true" />
            <div className="font-mono text-sm tracking-[0.2em] font-semibold">
              OG.STUDIO
            </div>
          </div>
          <nav className="flex items-center gap-5">
            <a
              href="https://github.com/BerMud4X/og-image-generator"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 hover:text-orange-500 transition-colors"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/bernardo-fernandes-de-sousa-93262121b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 hover:text-orange-500 transition-colors"
            >
              <LinkedinIcon />
            </a>
          </nav>
        </div>
      </header>

      {/* MAIN — 3-PANEL */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[280px_1fr_360px] lg:divide-x divide-zinc-800">
        {/* PANEL 1 — TEMPLATES */}
        <aside className="p-5 space-y-3 lg:max-h-[calc(100vh-3.5rem-2.5rem)] lg:overflow-y-auto border-b border-zinc-800 lg:border-b-0">
          <Label>Templates</Label>
          <div className="space-y-3 pt-1">
            {TEMPLATES.map((t) => (
              <TemplateCard
                key={t.id}
                id={t.id}
                name={t.name}
                active={template === t.id}
                onClick={() => setTemplate(t.id)}
              />
            ))}
          </div>
        </aside>

        {/* PANEL 2 — CANVAS */}
        <section className="flex flex-col items-center justify-center p-8 gap-5 bg-[radial-gradient(ellipse_at_center,_rgb(24_24_27)_0%,_rgb(10_10_10)_75%)]">
          {imgSrc ? (
            <>
              <div className="w-full max-w-[820px]">
                <img
                  src={imgSrc}
                  alt="OG preview"
                  key={imgSrc}
                  className="w-full border border-zinc-800 shadow-2xl shadow-black/60 animate-in fade-in duration-300"
                  style={{ aspectRatio: "1200 / 630" }}
                />
              </div>
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                <span className="h-px w-10 bg-zinc-800" />
                <span>1200 × 630</span>
                <span className="h-px w-10 bg-zinc-800" />
              </div>
            </>
          ) : (
            <div className="font-mono text-xs text-zinc-600">Loading…</div>
          )}
        </section>

        {/* PANEL 3 — CONTROLS */}
        <aside className="p-5 space-y-6 lg:max-h-[calc(100vh-3.5rem-2.5rem)] lg:overflow-y-auto border-t border-zinc-800 lg:border-t-0">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <BrutalInput
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subtitle">Subtitle</Label>
            <BrutalInput
              id="subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="accent">Accent color</Label>
            <div className="flex items-center gap-2">
              <input
                id="accent"
                type="color"
                value={accent}
                onChange={(e) => setAccent(e.target.value)}
                aria-label="Accent color picker"
                className="h-10 w-12 cursor-pointer bg-zinc-900 border border-zinc-800 p-0"
              />
              <input
                type="text"
                value={accent}
                onChange={(e) => setAccent(e.target.value)}
                aria-label="Accent color hex value"
                className="flex-1 bg-zinc-900 border border-zinc-800 px-3 py-2.5 text-sm font-mono uppercase focus:border-orange-500 focus:outline-none transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {ACCENT_PRESETS.map((c) => (
                <button
                  key={c}
                  onClick={() => setAccent(c)}
                  aria-label={`Set accent ${c}`}
                  className={`h-7 w-7 border transition-all hover:scale-110 ${
                    accent.toLowerCase() === c.toLowerCase()
                      ? "border-zinc-100"
                      : "border-zinc-800"
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleCopy}
              className="bg-orange-500 text-zinc-950 px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-orange-400 active:scale-[0.97] transition-all"
            >
              {copied ? "✓ Copied" : "Copy URL"}
            </button>
            <button
              onClick={handleDownload}
              className="border border-zinc-700 px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] font-semibold hover:border-orange-500 hover:text-orange-500 active:scale-[0.97] transition-all"
            >
              ↓ Download
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>HTML Snippet</Label>
              <button
                onClick={handleCopySnippet}
                className="font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500 hover:text-orange-500 transition-colors"
              >
                {snippetCopied ? "✓ Copied" : "Copy"}
              </button>
            </div>
            <pre className="text-[10px] bg-zinc-900 border border-zinc-800 p-3 overflow-x-auto whitespace-pre-wrap break-all font-mono text-zinc-400 leading-relaxed">
              <code>{metaSnippet}</code>
            </pre>
          </div>
        </aside>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-3 px-6">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
          <div>
            Built by{" "}
            <a
              href="https://www.linkedin.com/in/bernardo-fernandes-de-sousa-93262121b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-orange-500 transition-colors"
            >
              Bernardo
            </a>
          </div>
          <div>Apache 2.0</div>
        </div>
      </footer>
    </div>
  );
}

function Label({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500"
    >
      {children}
    </label>
  );
}

function BrutalInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      {...props}
      className="w-full bg-zinc-900 border border-zinc-800 px-3 py-2.5 text-sm focus:border-orange-500 focus:outline-none transition-colors"
    />
  );
}

function TemplateCard({
  id,
  name,
  active,
  onClick,
}: {
  id: string;
  name: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group block w-full text-left border transition-all ${
        active
          ? "border-orange-500"
          : "border-zinc-800 hover:border-zinc-700"
      }`}
    >
      <div className="aspect-[1200/630] bg-zinc-900 overflow-hidden">
        <img
          src={`/api/og?title=Aa&subtitle=Bb&template=${id}`}
          alt=""
          className="w-full h-full transition-transform duration-200 group-hover:scale-[1.02]"
        />
      </div>
      <div className="px-3 py-2 flex items-center justify-between bg-zinc-950">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em]">
          {name}
        </span>
        {active && (
          <div className="h-1.5 w-1.5 bg-orange-500" aria-hidden="true" />
        )}
      </div>
    </button>
  );
}
