import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: ["teaminsights.io", "localhost", "192.168.20.16"],
  },
};

export default nextConfig;
