import type { TemplateProps } from "./minimal-dark";

export const fonts = [
  { name: "Playfair Display", family: "Playfair+Display:wght@700", weight: 700 },
  { name: "Inter", family: "Inter:wght@400", weight: 400 },
];

export default function Magazine({ title, subtitle }: TemplateProps) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#fafaf9",
      }}
    >
      {/* Left accent stripe */}
      <div
        style={{
          display: "flex",
          width: 16,
          height: "100%",
          backgroundColor: "#f97316",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          flex: 1,
        }}
      >
        <div
          style={{
            fontSize: 96,
            color: "#1c1917",
            lineHeight: 1.0,
            fontFamily: "Playfair Display",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#57534e",
            marginTop: 32,
            fontFamily: "Inter",
            maxWidth: 800,
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
}
