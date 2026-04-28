"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";  

export default function Home() {
  // 1. State
  const [title, setTitle] = useState("Mon Portfolio");
  const [subtitle, setSubtitle] = useState("Développeur Web");
  const [template, setTemplate] = useState ("minimal-dark");
  const [imgSrc, setImgSrc] = useState("");
  const [copied, setCopied] = useState(false);
  const [origin, setOrigin] = useState("");
  const [snippetCopied, setSnippetCopied] = useState(false);


  // 2. Helper qui construit l'URL avec les params actuels
  const buildUrl = () => {
    const params = new URLSearchParams({ title, subtitle, template });
    return `/api/og?${params.toString()}`;
  };

  // 3. Debounce 300ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setImgSrc(buildUrl());
    }, 300);
    return () => clearTimeout(timer);
  }, [title, subtitle, template]);

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  // 4. Copy URL handler
  const handleCopy = async () => {
    const fullUrl = `${window.location.origin}${buildUrl()}`;
    await navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 4.1 HandleDownload
  const handleDownload = async () => {
    const url = `${window.location.origin}${buildUrl()}`;
    const response = await fetch(url);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = `og-${title.replace(/\s+/g, "-").toLowerCase()}.png`;
    link.click();
    URL.revokeObjectURL(objectUrl);
  };

  // 4.2 Copy meta snippet
  const fullImageUrl =  origin ? `${origin}${buildUrl()}` : buildUrl();
  const metaSnippet = `<meta property="og:image" content="${fullImageUrl}" />`;
  const handleCopySnippet = async () => {
    await navigator.clipboard.writeText(metaSnippet);
    setSnippetCopied(true);
    setTimeout(() => setSnippetCopied(false), 2000);
  };

  // 5. UI
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="font-semibold text-lg">OG Image Generator</div>
          <nav className="flex items-center gap-4">
            <a
              href="https://github.com/BerMud4X/og-image-generator"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/bernardo-fernandes-de-sousa-93262121b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <LinkedinIcon />
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-7xl mx-auto">
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
          <Label htmlFor="template">Template</Label>
          <Select value={template} onValueChange={setTemplate}>
            <SelectTrigger id="template">
              <SelectValue />
              </SelectTrigger>
            <SelectContent>
              <SelectItem value="minimal-dark">Minimal Dark</SelectItem>
              <SelectItem value="gradient-bold">Gradient Bold</SelectItem>
              <SelectItem value="terminal">Terminal</SelectItem>
              <SelectItem value="magazine">Magazine</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2">
          <Button onClick={handleCopy} className="flex-1">
            {copied ? "Copied!" : "Copy image URL"}
          </Button>
          <Button onClick={handleDownload} variant="outline" className="flex-1">
            Download image
          </Button>
        </div>
        <div className="space-y-2">
          <Label>HTML snippet</Label>
          <div className="relative">
            <pre className="text-xs bg-muted p-3 pr-20 rounded-md overflow-x-auto whitespace-pre-wrap break-all border">
              <code>{metaSnippet}</code>
            </pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 h-7"
              onClick={handleCopySnippet}
            >
              {snippetCopied ? "Copied!" : "Copy"}
            </Button>
          </div>
        </div>
      </section>

      {/* Preview à droite */}
      <section className="flex flex-col items-center gap-3">
        {imgSrc && (
          <>
            <img
              src={imgSrc}
              alt="OG preview"
              className="w-full border rounded-lg shadow-lg"
              style={{ aspectRatio: "1200 / 630" }}
            />
            <div className="text-xs text-muted-foreground font-mono">
              1200 x 630
            </div>
          </>
        )}
      </section>
    </main>

      <footer className="border-t mt-auto ">
         <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <div>
            Made with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/bernardo-fernandes-de-sousa-93262121b/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              Bernardo
            </a>
          </div>
          <div>
            Source code on{" "}
            <a
              href="https://github.com/BerMud4X/og-image-generator"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
