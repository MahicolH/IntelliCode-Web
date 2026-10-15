# IntelliCode Web

Landing de IntelliCode Analytics & Software hecha con React + Vite.

## Comandos
```bash
npm install
npm run dev      # servidor local con recarga automática
npm run build    # genera la carpeta dist/
npm run preview  # prueba la versión compilada
```

## Dónde editar
- `src/config.js`: WhatsApp, correo y `appUrl` (URL del futuro aplicativo).
- `src/data/`: servicios, proyectos y preguntas frecuentes.
- `src/styles.css`: colores y tamaños (variables al inicio).
- `public/`: video y póster del video.

## Puente hacia el aplicativo
Cuando exista la app, escribe su URL en `appUrl` dentro de `src/config.js`.
Aparecerá el botón "Ingresar a la app" en el menú y en el inicio.

## Publicar en Render
1. Sube el proyecto a GitHub.
2. En Render: New + > Static Site, y elige el repositorio.
3. Build Command: `npm install && npm run build`
4. Publish Directory: `dist`
5. Create Static Site. Cada `git push` a la rama principal vuelve a publicar.

`render.yaml` ya trae esta configuración, por si prefieres crearlo con Blueprint.
