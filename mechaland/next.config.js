/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['mechaland-be.herokuapp.com'],
  },
}

module.exports = nextConfig