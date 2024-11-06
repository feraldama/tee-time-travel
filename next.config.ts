import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true // Ignora errores de ESLint durante la construcción
  }
  // otras opciones de configuración
}

export default nextConfig
