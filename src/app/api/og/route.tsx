import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { templates, type TemplateName } from "./templates";

async function loadGoogleFont(family: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`;
  const css = await fetch(url).then((res) => res.text());
  const fontUrl = css.match(/src: url\((.+?)\) format/)?.[1];
  if (!fontUrl) throw new Error("Font URL not found in Google Fonts CSS");
  return fetch(fontUrl).then((res) => res.arrayBuffer());
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") ?? "Hello World";
  const subtitle = searchParams.get("subtitle") ?? "Built with @vercel/og";

  const templateName = (searchParams.get("template") ?? "minimal-dark") as TemplateName;
  const t = templates[templateName] ?? templates["minimal-dark"];
  const { Component: Template, fonts: templateFonts } = t;

  // Optional accent color override (hex string). Templates have their own defaults.
  const accent = searchParams.get("accent") ?? undefined;

  // Include common chars (digits, $, terminal chars) so all templates render correctly
  const text = title + subtitle + " $0123456789>:!@#";

  const loadedFonts = await Promise.all(
    templateFonts.map(async (f) => ({
      name: f.name,
      data: await loadGoogleFont(f.family, text),
      style: "normal" as const,
      weight: f.weight as 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
    }))
  );

  return new ImageResponse(
    <Template title={title} subtitle={subtitle} accent={accent} />,
    {
      width: 1200,
      height: 630,
      fonts: loadedFonts,
    }
  );
}
