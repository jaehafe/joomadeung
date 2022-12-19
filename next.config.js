/* eslint-disable @typescript-eslint/no-var-requires */
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },

  images: {
    domains: ['avatars.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/youtube',
        destination: 'https://youtube.com/@miniapp223',
        permanent: false,
      },
      {
        source: '/feed.xml',
        destination: '/api/rss',
        permanent: false,
      },
    ]
  },
}

module.exports = withContentlayer(nextConfig)
