/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'export',
  transpilePackages: ['@repo/ui'],
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp']
  }
}
