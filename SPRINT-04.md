# Sprint 04 — UX, contacto, SEO técnico y rendimiento

## Objetivo

Cerrar cuatro ajustes transversales antes de seguir ampliando contenido: interacción de FAQ, acceso persistente a WhatsApp, sitemap completo y adopción global de WebP.

## 1. Preguntas frecuentes: acordeón exclusivo

- Cuando se abra una pregunta, cualquier otra pregunta abierta debe cerrarse automáticamente.
- Mantener la solución accesible con teclado y lectores de pantalla.
- Preferir HTML semántico con `<details>` / `<summary>` y añadir solo el JavaScript mínimo necesario para garantizar el comportamiento en todos los navegadores objetivo.
- No impedir que una persona cierre manualmente la pregunta activa.

## 2. Botón flotante de WhatsApp

- Recuperar el acceso flotante a WhatsApp presente en la web original.
- Ubicación: esquina inferior derecha, sin tapar contenido ni controles.
- URL actual:
  `https://wa.me/34650805613?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20las%20sesiones%20de%20terapia%20regresiva.`
- Debe ser accesible: etiqueta comprensible, foco visible y área táctil suficiente.
- Puede incluir una animación suave que anime a iniciar la primera interacción, pero debe ser discreta, no repetitiva de forma agresiva y desactivarse con `prefers-reduced-motion`.
- Revisar contraste y comportamiento en móvil.

## 3. Sitemap completo

- Auditar todas las rutas públicas existentes del repositorio.
- Incluir páginas principales, artículos, biblioteca, autores, índices de libros, fichas de libros, política de privacidad y licencias de recursos.
- Excluir recursos, assets y cualquier página técnica que no deba indexarse.
- Mantener el sitemap preparado para la URL final de producción.
- Antes del corte a producción, retirar `noindex,nofollow` y verificar que `robots.txt` y `sitemap.xml` sean coherentes.

## 4. WebP en todo el sitio

- Comprobar que la Action de conversión ha generado las versiones WebP necesarias.
- Sustituir todas las referencias HTML a JPG/JPEG/PNG por sus equivalentes WebP cuando exista conversión válida.
- Mantener originales temporalmente como respaldo hasta verificar visualmente todo el sitio.
- Priorizar nombres de archivo semánticos y legibles para los assets nuevos y renombrados.
- Añadir `width` y `height` cuando sea posible para reducir cambios de layout.
- Mantener `loading="lazy"` en imágenes fuera del primer viewport y evitarlo en la imagen principal/LCP.

## Criterio de cierre

El sprint se considera cerrado cuando:

1. las FAQ funcionan como acordeón exclusivo;
2. el botón de WhatsApp aparece y funciona en todas las páginas;
3. el sitemap contiene todas las rutas públicas reales;
4. todas las imágenes servidas por el sitio usan WebP cuando exista versión convertida;
5. no quedan enlaces o assets rotos bajo `/mtr/`.
