import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Outputs static HTML/CSS/JS to the './out' directory
  basePath: process.env.NODE_ENV === 'production' ? '/website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/website/' : '',
  images: {
    unoptimized: true, // Required because Next.js Image Optimization needs a live server
  },
};

export default nextConfig;
