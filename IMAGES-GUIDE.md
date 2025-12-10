# Guía para Agregar Imágenes y Usar el Carrusel

## 📁 Paso 1: Agregar Imágenes

### Estructura de Carpetas
```
public/
├── images/
│   ├── hero/           # Imágenes del carrusel hero
│   │   ├── slide1.jpg
│   │   ├── slide2.jpg
│   │   └── slide3.jpg
│   ├── projects/       # Imágenes de proyectos
│   │   ├── cti-pro-labs.jpg
│   │   ├── condolink.jpg
│   │   └── carwash.jpg
│   ├── services/       # Imágenes de servicios
│   └── Logo Bizgen.png # Tu logo (ya existe)
```

### Cómo Agregar Imágenes
1. Copia tus imágenes a la carpeta correspondiente en `public/images/`
2. Formatos recomendados: JPG, PNG, WebP
3. Tamaños recomendados:
   - Hero/Carrusel: 1920x1080px o 1600x900px
   - Proyectos: 800x600px
   - Logo: Ya tienes uno

## 🎠 Paso 2: Activar el Carrusel en el Hero

### Opción A: Reemplazar el Hero Actual con el Carrusel

Edita `src/app/page.tsx` y reemplaza la sección del Hero:

**ANTES:**
```tsx
{/* Hero Section */}
<section className="bg-gradient-to-r from-primary-navy to-primary-blue section-padding min-h-[600px] flex items-center">
  <div className="container-custom">
    // ... contenido actual
  </div>
</section>
```

**DESPUÉS:**
```tsx
import HeroCarousel from '@/components/HeroCarousel'

// ... en el return:
<HeroCarousel />
```

### Opción B: Agregar Imágenes al Carrusel

Edita `src/components/HeroCarousel.tsx` y descomenta las líneas de imágenes:

```tsx
const slides: Slide[] = [
  {
    id: 1,
    title: 'Custom Solutions That Scale Your Business',
    // ... resto del contenido
    image: '/images/hero/slide1.jpg', // ← Descomenta esta línea
  },
  // Haz lo mismo con slide2.jpg y slide3.jpg
]
```

## 🎨 Paso 3: Personalizar el Carrusel

### Cambiar el Tiempo de Auto-Play
En `HeroCarousel.tsx`, línea con `setInterval`:
```tsx
const interval = setInterval(() => {
  setCurrentSlide((prev) => (prev + 1) % slides.length)
}, 5000) // ← Cambia 5000 a los milisegundos que quieras
```

### Agregar o Modificar Slides
En `HeroCarousel.tsx`, edita el array `slides`:
```tsx
const slides: Slide[] = [
  {
    id: 1,
    title: 'Tu Título Aquí',
    subtitle: 'Tu Subtítulo',
    description: 'Tu descripción...',
    primaryButton: {
      text: 'Texto del Botón',
      href: '/ruta',
    },
    secondaryButton: {
      text: 'Otro Botón',
      href: '/otra-ruta',
    },
    gradient: 'from-primary-navy to-primary-blue', // o tu gradiente
    image: '/images/hero/tu-imagen.jpg', // opcional
  },
  // Agrega más slides aquí...
]
```

## 🖼️ Paso 4: Agregar Imágenes a los Proyectos

En los archivos de portfolio (ej: `src/app/portfolio/cti-pro-labs/page.tsx`):

**ANTES:**
```tsx
<div className="bg-gradient-to-br from-primary-blue to-secondary-cyan h-96 rounded-lg mb-8 flex items-center justify-center">
  <span className="text-white text-8xl opacity-50">🔬</span>
</div>
```

**DESPUÉS:**
```tsx
import Image from 'next/image'

<div className="relative h-96 rounded-lg mb-8 overflow-hidden">
  <Image
    src="/images/projects/cti-pro-labs.jpg"
    alt="CTI Pro Labs Platform"
    fill
    className="object-cover"
  />
</div>
```

## 📋 Características del Carrusel Incluidas

✅ **Auto-play** - Cambia automáticamente cada 5 segundos
✅ **Navegación con flechas** - Botones prev/next
✅ **Dots navigation** - Puntos para ir a slides específicos
✅ **Pause on interaction** - Se pausa cuando el usuario interactúa
✅ **Animaciones suaves** - FadeIn y SlideUp
✅ **Responsive** - Funciona en móvil, tablet y desktop
✅ **Gradientes o imágenes** - Puedes usar uno o ambos
✅ **3 slides pre-configurados** - Con contenido de BG Tech

## 🚀 Para Probar

1. **Con gradientes (sin imágenes):** Ya está listo - solo reemplaza el Hero en `page.tsx`
2. **Con imágenes:**
   - Copia 3 imágenes a `public/images/hero/` (slide1.jpg, slide2.jpg, slide3.jpg)
   - Descomenta las líneas `image:` en `HeroCarousel.tsx`
   - Reemplaza el Hero en `page.tsx`

## 💡 Tip

Si quieres solo gradientes sin imágenes, el carrusel ya funciona perfectamente. Las imágenes son opcionales y se superponen con opacidad 20% sobre el gradiente.

---

**Actualmente:** El carrusel está creado pero NO está activo. El Hero actual sigue siendo el estático.

**Para activarlo:** Reemplaza la sección Hero en `src/app/page.tsx` con `<HeroCarousel />`
