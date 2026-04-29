import type { TemplateProps } from "./minimal-dark";

export const fonts = [
  { name: "JetBrains Mono", family: "JetBrains+Mono:wght@500", weight: 500 },
];

export default function CodeSnippet({
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
        backgroundColor: "#1e1e2e",
        fontFamily: "JetBrains Mono",
      }}
    >
      {/* Editor top bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "18px 24px",
          backgroundColor: "#181825",
          borderBottom: "1px solid #313244",
          gap: 18,
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 9999,
              backgroundColor: "#f38ba8",
            }}
          />
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 9999,
              backgroundColor: "#f9e2af",
            }}
          />
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 9999,
              backgroundColor: "#a6e3a1",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
            padding: "6px 18px",
            backgroundColor: "#1e1e2e",
            fontSize: 20,
            color: "#cdd6f4",
            borderRadius: 6,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 10,
              height: 10,
              borderRadius: 9999,
              backgroundColor: accent,
            }}
          />
          <div style={{ display: "flex" }}>og-image.ts</div>
        </div>
      </div>

      {/* Code body */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "60px",
          flex: 1,
          justifyContent: "center",
          gap: 18,
        }}
      >
        {/* Comment with title */}
        <div style={{ display: "flex", fontSize: 38, color: "#6c7086" }}>
          // {title}
        </div>

        {/* export function ship() { */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            gap: 16,
            fontSize: 44,
            marginTop: 12,
          }}
        >
          <div style={{ color: "#cba6f7" }}>export function</div>
          <div style={{ color: "#89b4fa" }}>ship()</div>
          <div style={{ color: "#cdd6f4" }}>{"{"}</div>
        </div>

        {/* return "subtitle" */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            gap: 16,
            fontSize: 44,
            paddingLeft: 40,
          }}
        >
          <div style={{ color: "#cba6f7" }}>return</div>
          <div style={{ color: "#a6e3a1" }}>{`"${subtitle}"`}</div>
        </div>

        {/* closing brace */}
        <div style={{ display: "flex", fontSize: 44, color: "#cdd6f4" }}>
          {"}"}
        </div>
      </div>
    </div>
  );
}
