import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Workers (static assets)
  output: 'export',
  images: { unoptimized: true },
  devIndicators: false,
};

export default nextConfig;
