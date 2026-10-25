import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  outputFileTracingRoot: __dirname,
  turbopack: {
    root: __dirname,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
    domains: [
      "images.unsplash.com",
      "frontendzone.com",
      "www.frontendzone.com",
    ],
  },
};

export default nextConfig;
