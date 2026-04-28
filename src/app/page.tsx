"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
