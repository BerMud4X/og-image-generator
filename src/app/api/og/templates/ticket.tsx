import type { TemplateProps } from "./minimal-dark";

export const fonts = [
  { name: "Inter", family: "Inter:wght@700", weight: 700 },
];

const BARCODE_PATTERN = [3, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 3, 2, 1, 3, 1, 2, 2];

export default function Ticket({
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
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1a1a1a",
        padding: "60px",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          backgroundColor: accent,
          color: "#1a1a1a",
        }}
      >
        {/* MAIN section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "60px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: "0.3em",
            }}
          >
            ADMIT ONE
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 88,
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 32,
                marginTop: 20,
                opacity: 0.75,
              }}
            >
              {subtitle}
            </div>
          </div>
        </div>

        {/* Dashed divider */}
        <div
          style={{
            display: "flex",
            width: 0,
            borderLeft: "3px dashed #1a1a1a",
            margin: "30px 0",
          }}
        />

        {/* STUB section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: 220,
            padding: "40px 20px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 14,
              letterSpacing: "0.3em",
            }}
          >
            NO.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              lineHeight: 1.0,
              marginTop: 8,
            }}
          >
            001
          </div>

          {/* Barcode */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              marginTop: 36,
            }}
          >
            {BARCODE_PATTERN.map((w, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  width: w,
                  height: 50,
                  backgroundColor: "#1a1a1a",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
