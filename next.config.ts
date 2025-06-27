import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'images.photowall.com',
      't4.ftcdn.net',
      'media.istockphoto.com'
    ],
  },
  output: 'export',
  basePath: '/Portfolio2025',
  assetPrefix: '/Portfolio2025/',
};

export default nextConfig;
