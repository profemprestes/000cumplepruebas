import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Mejora el rendimiento de compilación con Turbopack
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],

  // Configuración de caché avanzada de Next.js 16
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-icons'],
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      // Añadimos Supabase para tus assets dinámicos
      { protocol: 'https', hostname: '*.supabase.co' },
    ],
  },

  // Evita errores de hidratación comunes en aplicaciones 3D pesadas
  reactStrictMode: true,
}

export default nextConfig
