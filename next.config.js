/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};
