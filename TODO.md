# TODO — Mi Terapia Regresiva

## Prioridad inmediata

### 1. Normalizar la sección de autores

Patrón visual y estructural: fichas de **Brian Weiss** y **Michael Newton**.

- [x] Rediseñar `/autores/` para que comparta el mismo lenguaje visual de las fichas de autor: retrato o placeholder coherente, categoría, información breve y tarjetas homogéneas.
- [x] Normalizar Helen Wambach.
- [x] Normalizar Ian Stevenson.
- [x] Normalizar Raymond A. Moody.
- [x] Normalizar Roger J. Woolger.
- [x] Normalizar Morris Netherton.
- [x] Normalizar Edith Fiore.
- [x] Normalizar Hans TenDam.
- [x] Mantener una estructura común en todas las fichas: hero de autor, datos rápidos, por qué aparece en la biblioteca, bibliografía seleccionada, fuentes y acceso a libros.
- [x] Utilizar retrato reutilizable cuando exista y esté verificada su licencia; en caso contrario usar los placeholders de perfil ya incorporados al proyecto.
- [x] Mantener autores/biblioteca como recurso secundario y no competir con las páginas de servicio.
- [ ] Incorporar localmente el retrato reutilizable ya identificado de Raymond A. Moody y revisar si encontramos retratos reutilizables para otras fichas sin depender de hotlinks externos.

## Lighthouse / calidad técnica

Resultados recibidos el 14/09/2026 para `https://stg.miterapiaregresiva.com/`:

- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 66
- Agentic Browsing: 2/2

### Lectura del informe

- El rendimiento medido es excelente: FCP 0,4 s, LCP 0,5 s, TBT 10 ms, CLS 0 y Speed Index 0,5 s.
- El SEO 66 no representa un problema del contenido: el staging lleva deliberadamente `noindex,nofollow` y Lighthouse lo identifica como causa del bloqueo de indexación.
- El informe todavía muestra JPG/PNG de `assets/images/original/`; el repositorio actual ya referencia WebP en la portada y páginas migradas, por lo que hay que repetir la medición tras el despliegue actual.
- La mayor parte de los avisos de JavaScript, tareas largas y código no utilizado proceden de extensiones instaladas en Chrome durante la captura y no del sitio.
- Lighthouse también señala ausencia de CSP, HSTS, COOP y política de framing. Son tareas de infraestructura/cabeceras y no afectaron al 100 de Best Practices del informe.

### Revisiones pendientes

- [ ] Repetir Lighthouse después de que el último despliegue de GitHub Pages esté publicado, preferiblemente en ventana de incógnito y sin extensiones del navegador.
- [ ] Confirmar desde el sitio desplegado que ya se sirven las imágenes WebP y no las antiguas rutas `assets/images/original/*.jpg|png`.
- [x] Añadir `fetchpriority="high"` a la imagen LCP de la portada.
- [ ] Preparar tamaños responsive (`srcset` / `sizes`) para las imágenes principales cuando aporte una reducción real de transferencia.
- [ ] Revisar TTL de caché de recursos estáticos. GitHub Pages limita el control directo de cabeceras, por lo que se evaluará una solución de borde/CDN si compensa.
- [ ] Antes del paso a producción retirar `noindex,nofollow`; el SEO 66 del informe actual se debe principalmente al bloqueo deliberado de indexación del staging.
- [ ] Añadir y revisar `rel="canonical"` en producción.
- [ ] Validar datos estructurados cuando se incorporen.
- [ ] Evaluar cabeceras de seguridad: CSP, HSTS, COOP y protección frente a framing. Si GitHub Pages no permite configurarlas de forma suficiente, resolverlas en la capa de dominio/CDN.
- [x] No considerar como problemas propios los avisos de JavaScript, tareas largas o terceros originados por extensiones de Chrome presentes durante la medición.

## Instagram — publicaciones para programar

Objetivo: reutilizar el contenido del sitio para construir una cuenta coherente, útil y sostenible sin convertir Instagram en una fuente de contenido separada de la web.

Cadencia inicial propuesta: **2 publicaciones por semana**. Cada publicación debe enlazar conceptualmente con una página o artículo del sitio y, cuando proceda, cerrar con una llamada suave a ampliar información en la web.

| # | Tema | Fuente del sitio | Formato sugerido | Estado |
|---|---|---|---|---|
| 1 | ¿Qué es la terapia regresiva? | `/terapia-regresiva/` | Carrusel introductorio | Pendiente |
| 2 | ¿Cómo es el estado regresivo? | `/articulos/como-es-el-estado-regresivo/` | Carrusel | Pendiente |
| 3 | ¿Voy a perder el control? | `/preguntas-frecuentes/` | Post FAQ | Pendiente |
| 4 | Terapia regresiva vs. regresión | `/articulos/terapia-regresiva-vs-regresion/` | Carrusel comparativo | Pendiente |
| 5 | Cómo comienza un proceso: entrevista inicial | `/como-trabajo/` | Carrusel breve | Pendiente |
| 6 | Un proceso con principio y final | `/como-trabajo/` | Post de posicionamiento | Pendiente |
| 7 | «No soy una gurú ni una iluminada» | `/como-trabajo/` | Post de posicionamiento / cita | Pendiente |
| 8 | ¿Tengo que creer en la reencarnación? | `/preguntas-frecuentes/` | Post FAQ | Pendiente |
| 9 | ¿Todo el mundo ve imágenes durante una regresión? | `/preguntas-frecuentes/` | Carrusel sensorial | Pendiente |
| 10 | ¿Cuánto dura una sesión? | `/preguntas-frecuentes/` | Post FAQ | Pendiente |
| 11 | ¿Cuántas sesiones suelen ser necesarias? | `/preguntas-frecuentes/` | Post FAQ | Pendiente |
| 12 | Por qué las sesiones son presenciales | `/preguntas-frecuentes/` | Carrusel | Pendiente |
| 13 | Terapia regresiva en La Laguna, Tenerife | `/contacto/` | Post local | Pendiente |
| 14 | Mi forma de acompañar una sesión | `/sobre-mi/` + `/como-trabajo/` | Carrusel personal/profesional | Pendiente |
| 15 | Qué puedes esperar de mí y qué no | `/como-trabajo/` | Carrusel | Pendiente |
| 16 | Presentación de la Biblioteca de terapia regresiva | `/biblioteca-de-terapia-regresiva/` | Post recurso | Pendiente |
| 17 | Brian Weiss: quién es y por qué aparece en la biblioteca | `/autores/brian-weiss/` | Autor de la semana | Pendiente |
| 18 | Michael Newton y la vida entre vidas | `/autores/michael-newton/` | Autor de la semana | Pendiente |
| 19 | Helen Wambach y las regresiones con grupos | `/autores/helen-wambach/` | Autor de la semana | Pendiente |
| 20 | Ian Stevenson y los recuerdos espontáneos de niños | `/autores/ian-stevenson/` | Autor de la semana | Pendiente |
| 21 | Raymond A. Moody y las experiencias cercanas a la muerte | `/autores/raymond-a-moody/` | Autor de la semana | Pendiente |
| 22 | Roger J. Woolger y Deep Memory Process | `/autores/roger-j-woolger/` | Autor de la semana | Pendiente |
| 23 | Morris Netherton y la terapia de vidas pasadas | `/autores/morris-netherton/` | Autor de la semana | Pendiente |
| 24 | Edith Fiore y la hipnosis clínica | `/autores/edith-fiore/` | Autor de la semana | Pendiente |
| 25 | Hans TenDam y la escuela neerlandesa de terapia regresiva | `/autores/hans-tendam/` | Autor de la semana | Pendiente |
| 26 | `Journey of Souls / El viaje de las almas` | `/autores/michael-newton/libros/el-viaje-de-las-almas/` | Libro / recurso | Pendiente |
| 27 | `Destiny of Souls / Destino de las almas` | `/autores/michael-newton/libros/destino-de-las-almas/` | Libro / recurso | Pendiente |
| 28 | `Life Between Lives` | `/autores/michael-newton/libros/life-between-lives/` | Libro / recurso | Pendiente |
| 29 | `Twenty Cases Suggestive of Reincarnation` | `/autores/ian-stevenson/` | Libro / investigación | Pendiente |
| 30 | `Life After Life / Vida después de la vida` | `/autores/raymond-a-moody/` | Libro / ECM | Pendiente |

### Criterios editoriales para Instagram

- [ ] Priorizar contenido educativo y de explicación frente a mensajes promocionales repetitivos.
- [ ] Mantener la misma voz que la web: directa, respetuosa y sin espectacularizar la regresión.
- [ ] Diferenciar con claridad investigación de recuerdos espontáneos, literatura de regresión terapéutica y experiencias cercanas a la muerte.
- [ ] No presentar como demostración científica lo que el sitio presenta como experiencia, interpretación o marco de trabajo.
- [ ] Preparar cada publicación en formato reutilizable para carrusel y, cuando sea posible, adaptación a story.
- [ ] Crear una plantilla visual común de Instagram basada en la identidad violeta/crema de la web.
- [ ] Añadir una columna futura con fecha programada, copy final, arte aprobado y estado de publicación.

## Antes del corte a producción

- [ ] Cambiar `<base href="/mtr/">` a `<base href="/">`.
- [ ] Retirar `noindex,nofollow`.
- [ ] Revisar `robots.txt`, sitemap y canonicales.
- [ ] Verificar redirecciones desde URLs antiguas de WordPress.
- [ ] Validar correo de contacto definitivo.
- [ ] Revisión visual completa en móvil y escritorio.
- [ ] Lighthouse final sin extensiones del navegador.
