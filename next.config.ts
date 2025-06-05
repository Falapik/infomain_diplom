import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Игнорировать ошибки ESLint при сборке
  },
  typescript: {
    ignoreBuildErrors: true, // Игнорировать ошибки TypeScript при сборке
  },
};

export default nextConfig;
