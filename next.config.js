/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["addapinch.com", "sallysbakingaddiction.com"],
  },
};

module.exports = nextConfig;
