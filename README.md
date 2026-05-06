# Portfolio Web — Leandro Martinez

Portfolio personal de una sola página construido con React 19, TypeScript y Vite. Incluye animaciones GSAP, proyectos destacados con links a demos reales y un formulario de contacto funcional.

## Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- GSAP + @gsap/react
- EmailJS
- Notistack

## Funcionalidades

- Página única con secciones independientes: hero, perfil, proyectos, contacto.
- Animaciones de entrada y scroll con GSAP (respeta `prefers-reduced-motion`).
- Loader inicial, cursor personalizado y barra de progreso de scroll.
- Formulario de contacto con validación y envío directo desde el frontend vía EmailJS.
- Diseño responsive con estética editorial.

## Instalación y uso

```bash
npm install
npm run dev
```

Para el formulario de contacto, crear un archivo `.env` en la raíz con:

```env
VITE_SERVICE_ID=
VITE_TEMPLATE_ID=
VITE_PUBLIC_KEY=
```

Esos valores se obtienen desde el dashboard de [EmailJS](https://www.emailjs.com/).

## Scripts

```bash
npm run dev       # servidor de desarrollo
npm run build     # build de producción
npm run preview   # previsualización del build
npm run lint      # análisis estático
```

## Estructura

```text
src/
  App.tsx
  main.tsx
  index.css
  hooks/
    useLandingGsap.ts
  libs/
    projects.ts
    skills.ts
  components/
    Landing.tsx
    PageLoader.tsx
    CustomCursor.tsx
    ScrollProgress.tsx
    landing/
      LandingHome.tsx
      LandingBuildings.tsx
      LandingSelectedWork.tsx
      LandingMainContent.tsx
      LandingContact.tsx
      LandingFooter.tsx
      LandingTopNav.tsx
```

## Contacto

- Email: [leandromartinez.dev@gmail.com](mailto:leandromartinez.dev@gmail.com)
- LinkedIn: [linkedin.com/in/leandromartinezuy](https://www.linkedin.com/in/leandromartinezuy/)
- GitHub: [github.com/leamartinez1707](https://github.com/leamartinez1707)

