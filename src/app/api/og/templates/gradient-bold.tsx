import type { TemplateProps } from "./minimal-dark";

export const fonts = [
  { name: "Inter", family: "Inter:wght@700", weight: 700 },
];

export default function GradientBold({
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
        justifyContent: "center",
        padding: "80px",
        fontFamily: "Inter",
        backgroundImage: `linear-gradient(135deg, #6366f1 0%, #ec4899 50%, ${accent} 100%)`,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 96,
            color: "#ffffff",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 36,
            color: "rgba(255, 255, 255, 0.9)",
            marginTop: 24,
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
}
