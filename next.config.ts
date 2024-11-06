import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true // Ignora errores de ESLint en la construcción
  },
  typescript: {
    ignoreBuildErrors: true // Ignora errores de TypeScript en la construcción
  }
}

export default nextConfig
