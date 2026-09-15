# Sprint 05: PageSpeed, accesibilidad y seguridad

Fecha: 2026-09-15. Base: informes de PageSpeed del mismo día.

## Cambios en el código

- Portada: prioridad alta para el símbolo que constituye el LCP móvil.
- Tarjetas de portada: variantes WebP de 400 y 560 px generadas desde los originales, `srcset` hasta 1536 px, `sizes`, dimensiones explícitas y decodificación asíncrona. Se mantiene carga diferida.
- WhatsApp: pulso con `transform` en lugar de animar sombras, manteniendo la preferencia de movimiento reducido. Texto de escritorio oscuro sobre el verde para mejorar el contraste.
- Las 43 páginas incorporan CSP mediante meta y una política de referencia. La CSP permite JavaScript del propio origen, bloquea scripts ejecutables inline, objetos y formularios; conserva las imágenes de Wikimedia y los estilos inline existentes.
- Nueva versión del recurso JavaScript en todas las páginas.
- Textos visibles, enlaces, canonicals y directivas de indexación preservados. `TODO.md` permanece exclusivo de staging.

## Pendiente de activación: Cloudflare

No se dispone de una conexión autenticada con Cloudflare en esta sesión. Estos ajustes están preparados, pero NO activados. Las respuestas observadas se sirven desde GitHub Pages con `Cache-Control: max-age=600`.

Antes de aplicar reglas, confirmar que el registro web pasa por el proxy de Cloudflare y que HTTPS funciona con SSL/TLS Full (strict). No cambiar los registros de correo. No añadir un archivo `_headers`: no configura las respuestas de GitHub Pages.

### Cabeceras de respuesta

Crear una regla de modificación de cabeceras limitada a:

```text
(http.host eq "miterapiaregresiva.com")
```

Establecer estas cabeceras (sobrescribir, no duplicar):

| Cabecera | Valor |
| --- | --- |
| Content-Security-Policy | `default-src 'self'; base-uri 'self'; object-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://commons.wikimedia.org https://upload.wikimedia.org; font-src 'self'; connect-src 'self'; frame-src 'none'; form-action 'none'; frame-ancestors 'none'` |
| X-Frame-Options | `DENY` |
| X-Content-Type-Options | `nosniff` |
| Referrer-Policy | `strict-origin-when-cross-origin` |
| Cross-Origin-Opener-Policy | `same-origin` |
| Strict-Transport-Security | `max-age=86400` |

HSTS: empezar con un día; tras verificar HTTPS estable, ampliar progresivamente a un año. No activar `includeSubDomains` ni `preload` sin auditar todos los subdominios.

La CSP del HTML no admite `frame-ancestors` y no sustituye estas cabeceras. No se declara resuelta la auditoría de Trusted Types: el JavaScript actual usa `innerHTML`. Esta política reduce exposición, pero no equivale a una CSP estricta basada en hashes o nonces.

### Caché del navegador

Crear una Cache Rule limitada a:

```text
(http.host eq "miterapiaregresiva.com" and starts_with(http.request.uri.path, "/assets/"))
```

Configurar Browser TTL para sobrescribir el valor de origen con **1 día (86400 segundos)**. Mantener el comportamiento de caché de borde existente y conservar las cadenas de consulta en la clave de caché. No aplicar la regla al HTML.

Antes de sustituir cualquier recurso estático, cambiar su nombre o el parámetro `?v=` en todas las referencias. No usar `immutable` con los nombres actuales: parte de los recursos aún no tiene hash de contenido.

Una caché de un año con `immutable` se reserva para una futura generación de todos los recursos con nombres basados en su contenido.

### Verificación tras activar

- Revisar cabeceras de `/`, `/contacto/` y un archivo de `/assets/` con una petición nueva.
- Confirmar que el HTML no recibe el TTL largo de los recursos.
- Comprobar consola sin bloqueos CSP, fotografías de Wikimedia, preguntas frecuentes y enlaces a WhatsApp.
- Repetir PageSpeed en móvil y escritorio. Los 100 previos no son una medición de esta versión.

Fuentes consultadas:

- https://developers.cloudflare.com/rules/transform/response-header-modification/
- https://developers.cloudflare.com/cache/how-to/cache-rules/settings/
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security

## Validación de esta entrega

- Sintaxis de `assets/site.js` validada con Node.
- Las 43 páginas conservan los textos visibles y los enlaces respecto al commit base.
- Recursos locales, candidatos `srcset` y JSON-LD comprobados.
- Sin scripts ejecutables inline ni manejadores de eventos inline incompatibles con la CSP.
- `git diff --check` sin errores.
- Pendiente: revisión visual, teclado y consola en navegador, y nueva medición PageSpeed. No se pudo descargar Chromium en el entorno de trabajo.
- Esta entrega se publica únicamente en staging. La promoción a producción queda pendiente de revisión.
