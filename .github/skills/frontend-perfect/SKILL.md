---
name: frontend-perfect
description: 'Diseñar y ejecutar frontend perfectionism para webs premium: experiencia de usuario sobresaliente, interfaces intencionales, animaciones y efectos profesionales, y rendimiento web optimo. Use when: mejorar UX/UI, refinar microinteracciones, elevar motion design, auditar Core Web Vitals, evitar AI-slop visual, optimizar carga y fluidez en mobile y desktop.'
argument-hint: 'Producto/landing, publico objetivo, tono visual, restricciones tecnicas, metricas objetivo'
user-invocable: true
---

# Frontend Perfeccionismo

## Resultado Del Skill
Produce una mejora end-to-end de una web con estandar premium:
- Direccion visual clara y diferenciada (sin layouts genericos)
- Flujo UX pulido con jerarquia, ritmo y claridad de conversion
- Animaciones profesionales con proposito narrativo y tecnico
- Rendimiento optimizado con foco en Core Web Vitals
- Checklist final con evidencias y criterios de salida

## Cuando Usarlo
Activa este skill cuando el usuario pida:
- "perfeccionar" una landing, portfolio o web comercial
- "mejorar la experiencia" o elevar la calidad visual
- animaciones avanzadas, transiciones, scroll storytelling o efectos
- auditoria/performance tuning (LCP, INP, CLS, TBT)
- pulido final antes de release o demo importante

## Entradas Minimas
Solicita o infiere estas entradas:
1. Tipo de pagina y objetivo de negocio
2. Audiencia y contexto de uso (mobile-first, desktop-heavy, etc.)
3. Estilo deseado (editorial, tech, brutalist, luxe, etc.)
4. Stack y limites tecnicos (React, GSAP, Tailwind, SSR/CSR)
5. Presupuesto de performance (objetivos de CWV)

Si faltan datos, usa defaults explicitos y declralos antes de implementar.

## Flujo De Trabajo

### 1) Diagnostico Inicial
1. Revisar estructura de informacion, puntos de friccion UX y consistencia visual.
2. Detectar patrones "AI-slop" (bloques repetitivos, tipografia sin caracter, fondo plano, CTAs sin jerarquia).
3. Levantar riesgos de rendimiento: bundles grandes, imagenes pesadas, animaciones costosas, re-renders evitables.

Salida:
- Lista priorizada de mejoras (alto impacto primero)
- Hipotesis de valor por mejora

### 2) Direccion Visual Intencional
1. Definir un concepto visual unico (tipografia, color, ritmo espacial, texturas/fondos).
2. Establecer tokens base (variables CSS para color, spacing, radios, sombras, motion timings).
3. Verificar contraste, legibilidad y accesibilidad de color/tipografia.

Decision point:
- Si el proyecto ya tiene design system, respetar lenguaje existente y refinar sin romper identidad.
- Si no existe, crear un mini-sistema consistente antes de tocar componentes aislados.

### 3) UX De Alto Nivel
1. Ordenar narrativa de la pagina: hook inicial, prueba de valor, confianza, accion.
2. Afinar microcopy de navegacion y CTAs para reducir ambiguedad.
3. Mejorar interacciones clave (hover/focus/active/loading/empty/error).
4. Garantizar navegacion clara en desktop y mobile.

Checks:
- Acciones principales visibles sin friccion
- Jerarquia escaneable en 5 segundos
- Estados interactivos consistentes

### 4) Motion Profesional
1. Diseñar una coreografia: entrada inicial, reveals por seccion, transiciones entre bloques.
2. Usar animaciones con intencion funcional (guiar atencion, reforzar feedback, no decorar por decorar).
3. Evitar sobrecarga: limitar animaciones simultaneas y propiedades costosas.
4. Implementar fallback para `prefers-reduced-motion`.

Decision point:
- Si hay conflicto entre belleza y performance, priorizar fluidez y percepcion de respuesta.

### 5) Rendimiento Optimo
1. Optimizar imagenes (formato moderno, tamanos responsivos, lazy loading donde aplique).
2. Reducir JS/CSS innecesario (code splitting, tree-shaking, dependencias criticas).
3. Minimizar trabajo en main thread y layouts forzados.
4. Ajustar fuentes (subset/preload/estrategia de carga).
5. Validar CWV localmente y documentar impacto de cambios.

Objetivos recomendados:
- LCP <= 2.5s
- INP <= 200ms
- CLS <= 0.1

### 6) QA De Excelencia
1. Verificar responsive en breakpoints reales (no solo viewport teorico).
2. Probar keyboard navigation y focus states.
3. Revisar consistencia visual componente por componente.
4. Confirmar que las animaciones no rompen lectura, input ni scroll.

### 7) Cierre Y Entrega
1. Entregar resumen de cambios por impacto (UX, visual, motion, performance).
2. Incluir pendientes/riesgos y siguientes iteraciones recomendadas.
3. Adjuntar checklist de salida completado.

## Checklist De Salida
- Identidad visual diferenciada y consistente
- Flujo UX claro con CTA principal inequívoco
- Animaciones coherentes, suaves y con proposito
- `prefers-reduced-motion` implementado
- Performance dentro de presupuesto o con plan concreto para cerrar brecha
- Sin regresiones obvias en mobile/desktop/accesibilidad basica

## Criterios De Calidad
- Intencionalidad: cada decision visual o de motion tiene motivo
- Coherencia: tokens, componentes y estados hablan el mismo idioma
- Claridad: el usuario entiende que hacer y por que confiar
- Fluidez: interacciones responsivas sin jank perceptible
- Eficiencia: calidad premium sin costo tecnico desmedido

## Prompt De Ejemplo
- /frontend-perfect "Refina esta landing de portfolio para que transmita calidad premium editorial, con animaciones sobrias, storytelling por scroll y objetivos LCP<2.5s e INP<200ms."
- /frontend-perfect "Quiero una experiencia wow en mobile sin sacrificar rendimiento. Mantener identidad de marca existente y mejorar conversion del CTA principal."
