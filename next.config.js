/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'images.unsplash.com' }],
  },
  transpilePackages: ['date-fns/locale'],
}

module.exports = nextConfig
