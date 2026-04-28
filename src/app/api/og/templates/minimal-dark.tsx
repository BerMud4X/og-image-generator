export type TemplateProps = {
  title: string;
  subtitle: string;
};

export const fonts = [
  { name: "Inter", family: "Inter:wght@600", weight: 600 },
];

export default function MinimalDark({ title, subtitle }: TemplateProps) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#0a0a0a",
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
          backgroundColor: "#f97316",
        }}
      />

      {/* Title + subtitle en bas */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 84,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#a1a1aa",
            marginTop: 16,
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
}
