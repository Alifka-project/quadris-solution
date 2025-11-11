import { ImageResponse } from "next/og";

export const runtime = "edge";

const brandPrimary = "#4146A7";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Quadris Solutions";
  const subtitle =
    searchParams.get("subtitle") ??
    "International trust, family office, and reporting services.";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #f7f9fc 0%, #ffffff 60%)",
          padding: "70px 90px",
          fontFamily: "Inter, sans-serif",
          color: "#0f1720",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "24px",
              background: brandPrimary,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 38,
              fontWeight: 600,
            }}
          >
            Q
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 42,
                fontWeight: 700,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
              }}
            >
              Quadris Solutions
            </span>
            <span
              style={{
                marginTop: 8,
                fontSize: 24,
                color: "rgba(15, 23, 32, 0.6)",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
              }}
            >
              Trust is our business
            </span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <span
            style={{
              fontSize: 56,
              fontWeight: 600,
              lineHeight: 1.1,
            }}
          >
            {title}
          </span>
          <span style={{ fontSize: 28, color: "rgba(15, 23, 32, 0.7)" }}>
            {subtitle}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "rgba(15, 23, 32, 0.6)",
          }}
        >
          <span>quadris.solutions</span>
          <span>Zurich • Dubai • Singapore</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
