/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // صافي باركة، مسحنا دوك الجوج سطور
}

module.exports = nextConfig