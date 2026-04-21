import type { Config } from 'tailwindcss'
import animate from 'tailwind-merge' // Para animaciones profesionales

export default {
  // En v4, el 'content' se detecta automáticamente, pero lo dejamos
  // explícito para mayor seguridad en compilaciones complejas.
  content: ['./src/**/*.{ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Colores temáticos de tu proyecto "Cumple"
        'sky-blue': {
          DEFAULT: 'var(--sky-blue)',
          deep: 'var(--sky-blue-deep)',
        },
        'teddy-brown': {
          DEFAULT: 'var(--teddy-brown)',
          deep: 'var(--teddy-brown-deep)',
        },
        'golden-coin': {
          DEFAULT: 'var(--golden-coin)',
          deep: 'var(--golden-coin-deep)',
        },
        'grass-green': {
          DEFAULT: 'var(--grass-green)',
          deep: 'var(--grass-green-deep)',
        },
        night: 'var(--night)',
      },
      // Configuración necesaria para los modelos 3D y UI
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
