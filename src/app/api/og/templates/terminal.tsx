import type { TemplateProps } from "./minimal-dark";

export const fonts = [
  { name: "JetBrains Mono", family: "JetBrains+Mono:wght@500", weight: 500 },
];

export default function Terminal({ title, subtitle }: TemplateProps) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0c0c0c",
        fontFamily: "JetBrains Mono",
      }}
    >
      {/* Window chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "20px 28px",
          backgroundColor: "#1a1a1a",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 16,
            height: 16,
            borderRadius: 9999,
            backgroundColor: "#ff5f56",
          }}
        />
        <div
          style={{
            display: "flex",
            width: 16,
            height: 16,
            borderRadius: 9999,
            backgroundColor: "#ffbd2e",
          }}
        />
        <div
          style={{
            display: "flex",
            width: 16,
            height: 16,
            borderRadius: 9999,
            backgroundColor: "#27c93f",
          }}
        />
      </div>

      {/* Terminal content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "64px 56px",
          justifyContent: "center",
        }}
      >
        {/* Command line */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div style={{ fontSize: 36, color: "#525252" }}>$</div>
          <div style={{ fontSize: 36, color: "#10b981" }}>{title}</div>
        </div>

        {/* Output line with cursor */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 64, color: "#ffffff" }}>{subtitle}</div>
          <div
            style={{
              display: "flex",
              width: 24,
              height: 64,
              marginLeft: 12,
              backgroundColor: "#f97316",
            }}
          />
        </div>
      </div>
    </div>
  );
}
