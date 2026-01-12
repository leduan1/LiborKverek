/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.dicebear.com'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
      },
    ],
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  // Enable SWC minification
  swcMinify: true,
  // Optimize fonts
  optimizeFonts: true,
}

module.exports = nextConfig
