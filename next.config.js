/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Disable Next.js Image Optimization for static hosting/CDN environments
        unoptimized: true,
    },
}

module.exports = nextConfig
