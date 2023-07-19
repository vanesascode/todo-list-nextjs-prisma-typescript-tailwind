/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  }
}

module.exports = nextConfig

// The "serverActions" property is an experimental feature in Next.js that allows defining server-side actions for handling requests. 
