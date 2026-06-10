import { ImageResponse } from "next/og";
import { AUTHOR_NAME, AUTHOR_ROLE } from "@/lib/seo";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0b 0%, #141416 50%, #0a0a0b 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
          }}
        />
        <h1
          style={{
            color: "#fafafa",
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: 8,
            position: "relative",
          }}
        >
          {AUTHOR_NAME}
        </h1>
        <p
          style={{
            color: "#10b981",
            fontSize: 32,
            fontWeight: 500,
            letterSpacing: "0.02em",
            position: "relative",
          }}
        >
          {AUTHOR_ROLE}
        </p>
      </div>
    ),
    { ...size }
  );
}
