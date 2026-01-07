import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.volaroid.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'katahari-web.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'www.gearscloud.com',
      },
      {
        protocol: 'https',
        hostname: 'resumedrive.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;
