# Guía de Inicio: Next.js + Clerk Auth

Este proyecto es una implementación básica de autenticación utilizando **Clerk** en una aplicación Next.js. Esta guía te ayudará a entender cómo funciona la integración y cómo configurar tu entorno.

## 🚀 Requisitos Previos

- Node.js instalado.
- Una cuenta en [Clerk.com](https://clerk.com/).

## 🛠️ Instalación y Configuración

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar Variables de Entorno:**
   Crea un archivo `.env.local` en la raíz del proyecto. Necesitarás tus claves de API que puedes obtener en el Dashboard de Clerk.

   El archivo debe verse así:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...

   # Configuración de Redirecciones
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/dashboard
   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/sign-in
   ```

## 📂 Estructura del Proyecto y Archivos Clave

### 1. Middleware (`src/middleware.ts`)
Este es el guardián de tu aplicación. Intercepta las solicitudes y verifica si el usuario está autenticado.

- **Protección por defecto:** Por defecto, `clerkMiddleware` protege todas las rutas.
- **Rutas Públicas:** Se definen explícitamente las excepciones usando `createRouteMatcher`. En este proyecto, las siguientes rutas son públicas:
  - `/` (Página de inicio)
  - `/about`
  - `/sign-in` y `/sign-up` (Páginas de autenticación)

```typescript
const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/',
  '/about',
])
```

### 2. Proveedor de Contexto (`src/app/layout.tsx`)
Toda la aplicación está envuelta en `<ClerkProvider>`. Esto permite que los componentes de Clerk (como botones de usuario, hooks de sesión, etc.) funcionen en cualquier parte de tu app.

### 3. Componentes de UI
Probablemente encontrarás estos componentes en uso (por ejemplo, en `Navbar.tsx`):

- **`<SignedIn>`**: Muestra su contenido *solo* si el usuario ha iniciado sesión.
- **`<SignedOut>`**: Muestra su contenido *solo* si el usuario NO ha iniciado sesión (útil para mostrar botones de "Login").
- **`<UserButton />>`**: Un componente prefabricado que muestra el avatar del usuario y un menú para cerrar sesión o gestionar la cuenta.

## ▶️ Ejecutar el proyecto

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📚 Documentación Oficial

Para características más avanzadas, consulta la documentación oficial:
- [Documentación de Clerk](https://clerk.com/docs)
- [Clerk con Next.js](https://clerk.com/docs/quickstarts/nextjs)
