/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      cssProp: true,
      displayName: true,
    },
  },
}

module.exports = nextConfig
