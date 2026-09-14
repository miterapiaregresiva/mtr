# Sprint 04 — UX, contacto, SEO técnico y rendimiento

## Estado

**CERRADO — 14 de septiembre de 2026.**

## Objetivo

Cerrar cuatro ajustes transversales antes de seguir ampliando contenido: interacción de FAQ, acceso persistente a WhatsApp, sitemap completo y adopción global de WebP.

## 1. Preguntas frecuentes: acordeón exclusivo

Implementado.

- Todas las preguntas usan `<details>` / `<summary>`.
- Comparten `name="preguntas-frecuentes"`, por lo que los navegadores compatibles aplican agrupación nativa.
- `assets/site.js` añade un refuerzo para cerrar cualquier otra pregunta abierta cuando se abre una nueva.
- La pregunta activa puede cerrarse manualmente.
- Se mantiene la navegación por teclado y la semántica nativa.

## 2. Botón flotante de WhatsApp

Implementado globalmente desde `assets/site.js`.

- Aparece en la esquina inferior derecha en las 34 páginas públicas actuales.
- Utiliza la URL de contacto con mensaje inicial:
  `https://wa.me/34650805613?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20las%20sesiones%20de%20terapia%20regresiva.`
- Incluye `aria-label`, foco visible y área táctil amplia.
- Incorpora una entrada suave, dos pulsos y el mensaje contextual «¿Hablamos?».
- La animación se desactiva con `prefers-reduced-motion`.
- En pantallas estrechas se elimina el mensaje flotante lateral para no cubrir contenido.

El mismo script añade también la línea legal del footer:

`© 2023–2026 Mi Terapia Regresiva · Código bajo GNU AGPL v3.0 · Desarrollo web: Gofio Design`

con enlaces a la licencia del repositorio y a `https://gofiodesign.eu/`.

## 3. Sitemap completo

Implementado.

- Se auditaron todas las páginas HTML públicas existentes.
- `sitemap.xml` contiene **34 URLs**.
- Incluye páginas principales, artículos, biblioteca, autores, índices de libros, fichas de obras, política de privacidad y licencias de recursos.
- No incluye assets ni archivos técnicos.
- El sitemap está preparado para las URLs finales de producción en `https://miterapiaregresiva.com/`.

Antes del corte a producción seguirá siendo necesario retirar `noindex,nofollow`, cambiar `<base href="/mtr/">` por `<base href="/">` y revisar `robots.txt`.

## 4. WebP en todo el sitio

Implementado para los recursos raster locales utilizados actualmente por las páginas.

- Las referencias HTML a imágenes heredadas JPG/JPEG/PNG se han sustituido por las versiones existentes de `assets/images/webp/`.
- El logotipo mostrado en las páginas principales y fichas que lo incluyen se sirve también como WebP.
- `assets/site.js` conserva un mapa de compatibilidad para referencias heredadas o semánticas que pudieran quedar durante la migración.
- Se mantienen los originales temporalmente como respaldo.
- SVG, ICO y PNG específicos de favicon se mantienen en sus formatos correspondientes.
- Las imágenes externas con licencia, como fotografías alojadas en Wikimedia Commons, conservan el formato suministrado por la fuente externa cuando no existe una copia WebP local.

## 5. Recursos y licencias

- Todas las páginas activan `assets/site.js`.
- El footer ofrece acceso a `/licencias-de-recursos/`.
- La página de licencias documenta los iconos de Reda / FreeIcons.io y las fotografías Creative Commons utilizadas.

## Criterio de cierre

1. ✅ FAQ como acordeón exclusivo.
2. ✅ WhatsApp flotante global con animación accesible.
3. ✅ Sitemap completo con 34 rutas públicas.
4. ✅ WebP para los recursos raster locales con conversión disponible.
5. ✅ Capa común activada en las 34 páginas públicas actuales.

## Pendiente para producción, fuera de este sprint

- Revisión visual final de todo el staging.
- Cambio de `/mtr/` a raíz del dominio.
- Retirada de `noindex,nofollow`.
- Revisión final de `robots.txt`, sitemap y redirecciones de URLs antiguas.
