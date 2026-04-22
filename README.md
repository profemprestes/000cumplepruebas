# 🎮 GRAN FACU AVENTURA

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![pnpm](https://img.shields.io/badge/pnpm-Managed-F69220?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

Una experiencia interactiva y gamificada diseñada como invitación/misión para la aventura "Nivel 9". El proyecto utiliza una estética visual inspirada en voxels y un sistema de diseño "Sky World".

## ✨ Características

- 🚀 **Framework Moderno:** Construido con Next.js 15 y App Router.
- 🎨 **Estética Premium:** Diseño visual vibrante basado en voxels, modo oscuro y animaciones fluidas con **Framer Motion**.
- 📱 **Mobile-First:** Interfaz totalmente responsiva y optimizada para dispositivos móviles.
- 🔒 **Backend Robusto:** Integración con **Supabase** para persistencia de datos y autenticación.
- ⚡ **Rendimiento:** Uso intensivo de Server Components y optimización de assets en formato WebP.

## 🛠️ Stack Tecnológico

- **Core:** Next.js, React, TypeScript.
- **Estilos:** Tailwind CSS v4, Lucide Icons.
- **Animaciones:** Framer Motion.
- **Backend:** Supabase (@supabase/supabase-js), Prisma ORM.
- **Gestor de Paquetes:** `pnpm`.

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (v18+)
- pnpm instalada (`npm install -g pnpm`)

### Instalación

1. Clona el repositorio:

   ```bash
   git clone <repo-url>
   cd 000cumplepruebas
   ```

2. Instala las dependencias:

   ```bash
   pnpm install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env.local` basado en `.env.example` (si existe) o agrega las siguientes claves:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
   DATABASE_URL=tu_url_de_conexion_db
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

## 📜 Scripts Disponibles

- `pnpm dev`: Inicia el entorno de desarrollo.
- `pnpm build`: Genera la versión de producción.
- `pnpm start`: Ejecuta la versión compilada localmente.
- `pnpm lint`: Ejecuta el análisis estático de código.
- `pnpm format`: Formatea el código usando Prettier.

## 📐 Convenciones de Código

Siguiendo las directrices de `AGENTS.md`:

- **Naming:** Componentes en `kebab-case.tsx`.
- **Arquitectura:** Todo bajo el directorio `src/`.
- **Componentes:** Priorizar Server Components; usar `'use client'` solo cuando sea necesario.
- **UI:** Reutilizar componentes de `src/components/ui/` basados en Radix UI.

---

Creado para la **Gran Facu Aventura**.
