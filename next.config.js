/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  //output: "export",
  output: process.env.VERCEL ? undefined : 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
});

module.exports = nextConfig;
