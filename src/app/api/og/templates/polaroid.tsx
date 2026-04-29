import type { TemplateProps } from "./minimal-dark";

export const fonts = [
  { name: "Caveat", family: "Caveat:wght@600", weight: 600 },
];

export default function Polaroid({
  title,
  subtitle,
  accent = "#f97316",
}: TemplateProps) {
  const initial = (title.trim().charAt(0) || "A").toUpperCase();

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ede4d3",
        backgroundImage:
          "radial-gradient(circle at 20% 30%, #f5ecd9 0%, #ede4d3 50%, #d9cfba 100%)",
        fontFamily: "Caveat",
      }}
    >
      {/* Polaroid card */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fdfcf8",
          padding: "32px 32px 24px",
          boxShadow:
            "0 24px 60px rgba(0, 0, 0, 0.28), 0 8px 24px rgba(0, 0, 0, 0.18)",
          transform: "rotate(-2.5deg)",
          width: 540,
        }}
      >
        {/* "Photo" area with gradient + initial */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: 380,
            backgroundImage: `linear-gradient(135deg, ${accent} 0%, #ec4899 50%, #6366f1 100%)`,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 220,
              color: "rgba(255, 255, 255, 0.95)",
              lineHeight: 1,
            }}
          >
            {initial}
          </div>
        </div>

        {/* Handwriting caption */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 56,
              color: "#2a2a2a",
              lineHeight: 1.1,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#7a6f5f",
              marginTop: 6,
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
}
