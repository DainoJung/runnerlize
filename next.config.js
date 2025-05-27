/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['readdy.ai'],
  },
}

module.exports = nextConfig 