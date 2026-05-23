import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve("."),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
