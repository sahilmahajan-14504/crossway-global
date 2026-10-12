import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Crossway Global — Quality Products. Global Trade. Seamless Solutions.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoData = await readFile(
    join(process.cwd(), "public", "logo-chip.png")
  );
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#faf8f4",
          backgroundImage:
            "radial-gradient(circle at 25% 15%, #f3efe9 0%, #faf8f4 55%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoBase64}
          width={140}
          height={140}
          alt=""
          style={{ borderRadius: 28, marginBottom: 40 }}
        />
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#162b23",
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          Crossway Global
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#526058",
            letterSpacing: "0.02em",
          }}
        >
          Quality Products · Global Trade · Seamless Solutions
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 20,
            color: "#c87d1e",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Turmeric · Moringa · Ashwagandha · Beetroot
        </div>
      </div>
    ),
    { ...size }
  );
}
