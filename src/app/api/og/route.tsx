import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

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
  const theme = searchParams.get("theme") === "dark" ? "dark" : "light";

  const fontData = await loadGoogleFont("Inter:wght@600", title + subtitle);

  const bg = theme === "dark" ? "#0a0a0a" : "#ffffff";
  const fg = theme === "dark" ? "#ffffff" : "#0a0a0a";
  const muted = theme === "dark" ? "#a1a1aa" : "#71717a";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: bg,
          padding: "80px",
          fontFamily: "Inter",
        }}
      >
        <div style={{ fontSize: 72, color: fg, lineHeight: 1.1 }}>
          {title}
        </div>
        <div style={{ fontSize: 32, color: muted, marginTop: 24 }}>
          {subtitle}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
