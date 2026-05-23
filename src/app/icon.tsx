import { ImageResponse } from "next/og";

/**
 * Favicon dinâmico — Next gera /icon automaticamente.
 *
 * Usamos as iniciais "RL" sobre fundo verde-musgo (#20513E),
 * espelhando o monograma da marca. 64×64 é o tamanho que o
 * browser usa no tab + bookmarks.
 */
export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#20513E",
          color: "#F7F3EC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          fontStyle: "italic",
          fontSize: 38,
          letterSpacing: "-0.04em",
          fontWeight: 400,
        }}
      >
        RL
      </div>
    ),
    { ...size },
  );
}
