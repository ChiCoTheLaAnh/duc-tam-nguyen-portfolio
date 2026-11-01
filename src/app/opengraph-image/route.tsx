import { ImageResponse } from "next/og";

const size = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        background: "#faf9f5",
        padding: 80,
        color: "#172821",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 26 }}>
        TAM NGUYEN / CS STUDENT AT UIC
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 70,
          letterSpacing: -4,
          lineHeight: 1.05,
        }}
      >
        Hi, I’m Tam.
        <br />
        Here’s what I’m building.
      </div>
      <div style={{ display: "flex", fontSize: 24, color: "#52645c" }}>
        Chicago, IL · University of Illinois Chicago · May 2027
      </div>
    </div>,
    size,
  );
}
