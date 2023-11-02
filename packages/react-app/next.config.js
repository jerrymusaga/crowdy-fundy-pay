/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
    };
    return config;
  },
  images: {
    domains: ["ipfs.io", "localhost", "media.wired.com", "img.freepik.com"],
  },
};

module.exports = nextConfig;
