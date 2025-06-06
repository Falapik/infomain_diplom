import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Игнорировать ошибки ESLint при сборке
  },
  typescript: {
    ignoreBuildErrors: true, // Игнорировать ошибки TypeScript при сборке
  },
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000, // 1 hour
  },
  images: {
    domains: ["public.blob.vercel-storage.com"],
  },
};

export default nextConfig;
