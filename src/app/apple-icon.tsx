import { ImageResponse } from "next/og";

/**
 * Apple touch icon — usado quando o usuário adiciona o site à
 * tela inicial do iPhone/iPad. 180×180 é o tamanho oficial.
 */
export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, #2c5b48 0%, #20513e 80%)",
          color: "#F7F3EC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          fontStyle: "italic",
          fontSize: 110,
          letterSpacing: "-0.04em",
          fontWeight: 400,
          borderRadius: 36,
        }}
      >
        RL
      </div>
    ),
    { ...size },
  );
}
