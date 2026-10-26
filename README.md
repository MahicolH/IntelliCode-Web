# IntelliCode Analytics & Software — Landing

Sitio web oficial de **IntelliCode Analytics & Software**. Presenta la oferta de software a la medida, el portafolio de proyectos, la línea educativa IntelliClass y los canales de contacto.

## Secciones

| Orden | Sección | Descripción |
| --- | --- | --- |
| 1 | Header | Logo, navegación por anclas y botón de contacto. Va fijo arriba del hero, sin seguir el scroll |
| 2 | Hero | Propuesta de valor, botones de cotización y de equipo, relieve isométrico de fondo y marquesina infinita con 12 tecnologías |
| 3 | Services | Cuadrícula bento de 6 tarjetas con aparición al hacer scroll |
| 4 | IntelliClass | Cursos y clases dirigidas, con enlace de inscripción |
| 5 | Projects | Tres proyectos reales entregados a clientes |
| 6 | Team | Equipo con foto, rol y habilidades (`id="quien-soy"`) |
| 7 | Faq | Acordeón de preguntas frecuentes, una abierta a la vez |
| 8 | Contact | Tarjetas de WhatsApp y correo |
| 9 | Footer | Marca, navegación y datos de contacto |

## Stack

- React 18
- Vite 5
- CSS nativo con variables globales (`src/styles/tokens.css`)

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estructura

```
src/
  assets/       imágenes WebP y textura
  components/   un componente y su CSS por sección
  data/         contenido editable: services, classes, projects, team, faq, tech
  hooks/        useReveal para la aparición al hacer scroll
  styles/       tokens.css y base.css
  config.js     WhatsApp, correo y enlace a la app
```

## Configuración

Los datos de contacto viven en `src/config.js`:

| Clave | Uso |
| --- | --- |
| `whatsapp` | Enlace de WhatsApp para los botones de contacto |
| `email` | Correo corporativo |
| `appUrl` | Enlace a la aplicación web; mientras esté vacío, el botón "Ingresar a la app" no se muestra |

El contenido de cada sección se edita en `src/data/` sin tocar los componentes.

## Despliegue

`render.yaml` define un sitio estático en Render: `npm install && npm run build` y publicación de la carpeta `dist`.