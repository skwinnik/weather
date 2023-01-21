/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  concurrentFeatures: true,
  typescript: {
    tsconfigPath: "tsconfig.json",
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
