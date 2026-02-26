import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/portfolio-open-claw',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
