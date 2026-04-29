import type { TemplateProps } from "./minimal-dark";

export const fonts = [
  { name: "Inter", family: "Inter:wght@600", weight: 600 },
];

export default function LightMinimal({
  title,
  subtitle,
  accent = "#f97316",
}: TemplateProps) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#fafafa",
        padding: "80px",
        fontFamily: "Inter",
      }}
    >
      {/* Accent dot en haut */}
      <div
        style={{
          display: "flex",
          width: 16,
          height: 16,
          borderRadius: 9999,
          backgroundColor: accent,
        }}
      />

      {/* Title + subtitle en bas */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 84,
            color: "#0a0a0a",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#71717a",
            marginTop: 16,
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
}
