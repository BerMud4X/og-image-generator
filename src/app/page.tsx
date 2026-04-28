"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  // 1. State
  const [title, setTitle] = useState("Mon Portfolio");
  const [subtitle, setSubtitle] = useState("Fernando Sousa");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [imgSrc, setImgSrc] = useState("");
  const [copied, setCopied] = useState(false);

  // 2. Helper qui construit l'URL avec les params actuels
  const buildUrl = () => {
    const params = new URLSearchParams({ title, subtitle, theme });
    return `/api/og?${params.toString()}`;
  };

  // 3. Debounce 300ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setImgSrc(buildUrl());
    }, 300);
    return () => clearTimeout(timer);
  }, [title, subtitle, theme]);

  // 4. Copy URL handler
  const handleCopy = async () => {
    const fullUrl = `${window.location.origin}${buildUrl()}`;
    await navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 5. UI
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 min-h-screen max-w-7xl mx-auto">
      {/* Form à gauche */}
      <section className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">OG Image Generator</h1>
          <p className="text-muted-foreground">
            Generate dynamic Open Graph images with custom params.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subtitle">Subtitle</Label>
          <Input
            id="subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Theme</Label>
          <div className="flex gap-2">
            <Button
              variant={theme === "light" ? "default" : "outline"}
              onClick={() => setTheme("light")}
            >
              Light
            </Button>
            <Button
              variant={theme === "dark" ? "default" : "outline"}
              onClick={() => setTheme("dark")}
            >
              Dark
            </Button>
          </div>
        </div>

        <Button onClick={handleCopy} className="w-full">
          {copied ? "Copied!" : "Copy image URL"}
        </Button>
      </section>

      {/* Preview à droite */}
      <section className="flex items-start justify-center">
        {imgSrc && (
          <img
            src={imgSrc}
            alt="OG preview"
            className="w-full border rounded-lg shadow-lg"
            style={{ aspectRatio: "1200 / 630" }}
          />
        )}
      </section>
    </main>
  );
}
