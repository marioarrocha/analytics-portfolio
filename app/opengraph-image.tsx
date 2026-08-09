import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "#ffffff",
          color: "#111318",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            color: "#2457e6",
            marginBottom: 28,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Analytics Portfolio
        </div>

        <div
          style={{
            fontSize: 72,
            lineHeight: 1.02,
            fontWeight: 600,
            maxWidth: 980,
          }}
        >
          Designing analytical systems that improve business decisions.
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#5f6672",
            marginTop: 36,
          }}
        >
          Mario Arrocha
        </div>
      </div>
    ),
    size
  );
}