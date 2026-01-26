import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.assets.signify.com',
      },
    ],
  },
};

export default nextConfig;
