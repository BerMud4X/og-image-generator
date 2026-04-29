import type { TemplateProps } from "./minimal-dark";

export const fonts = [
  { name: "Caveat", family: "Caveat:wght@600", weight: 600 },
  { name: "Inter", family: "Inter:wght@700", weight: 700 },
];

export default function Postcard({
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
        backgroundColor: "#f5e9d4",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          backgroundColor: "#fdf6e7",
          border: "1px solid #c8b694",
          padding: "40px",
        }}
      >
        {/* LEFT — handwritten message */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            paddingRight: 40,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontFamily: "Caveat",
              color: "#8a7a5e",
            }}
          >
            Greetings,
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontFamily: "Caveat",
              color: "#3d3520",
              lineHeight: 1.05,
              marginTop: 12,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              fontFamily: "Caveat",
              color: "#8a7a5e",
              marginTop: 20,
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Vertical separator */}
        <div
          style={{
            display: "flex",
            width: 1,
            backgroundColor: "#c8b694",
            margin: "0 20px",
          }}
        />

        {/* RIGHT — stamp + postal lines */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 280,
            justifyContent: "space-between",
          }}
        >
          {/* Stamp */}
          <div
            style={{
              display: "flex",
              alignSelf: "flex-end",
              width: 130,
              height: 150,
              border: "3px dashed #8a7a5e",
              padding: 8,
              backgroundColor: accent,
            }}
          >
            <div
              style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: 14,
                fontFamily: "Inter",
                letterSpacing: "0.25em",
              }}
            >
              POSTAGE
            </div>
          </div>

          {/* Postal lines (address area) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 22,
              paddingBottom: 24,
            }}
          >
            <div style={{ display: "flex", height: 1, backgroundColor: "#c8b694" }} />
            <div style={{ display: "flex", height: 1, backgroundColor: "#c8b694" }} />
            <div style={{ display: "flex", height: 1, backgroundColor: "#c8b694" }} />
            <div style={{ display: "flex", height: 1, backgroundColor: "#c8b694" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
