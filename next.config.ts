import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['source.unsplash.com'],
    
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
