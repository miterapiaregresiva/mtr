# Sprint 02 — identidad visual, accesibilidad y migración real

## Objetivo

Trasladar contenidos y recursos útiles de la web original al repositorio `miterapiaregresiva/stg`, recuperar su identidad visual y mejorar funcionalidad y accesibilidad sin arrastrar la estructura de WordPress.

## Entorno de pruebas

El sitio se prueba actualmente bajo:

`https://stg.miterapiaregresiva.com/`

Mientras permanezca en staging:

- las páginas HTML usan `<base href="/mtr/">`;
- los enlaces internos son relativos a esa base;
- las páginas llevan `noindex,nofollow`;
- los canonical definitivos se añadirán al pasar a producción;
- `robots.txt` y `sitemap.xml` del repositorio se consideran archivos previstos para la versión de producción, no mecanismos de indexación del staging.

## Identidad visual recuperada

Se mantiene la línea del sitio original:

- morado como color principal;
- fondos claros;
- fotografías grandes;
- bordes redondeados amplios;
- tipografía ligera y aireada.

Se ha convertido en un sistema más consistente mediante `assets/styles.css`.

## Accesibilidad implementada

- enlace “Saltar al contenido”;
- foco visible con `:focus-visible`;
- objetivos táctiles de al menos 44 px en navegación;
- ancho de lectura controlado;
- contraste reforzado;
- estructura semántica con `header`, `nav`, `main`, `section`, `article` y `footer`;
- FAQ con `details/summary` nativos;
- diseño responsive sin depender de JavaScript;
- respeto a `prefers-reduced-motion`;
- imágenes decorativas con `alt=""` cuando el texto contiguo ya expresa la información.

## Recursos migrados al repositorio nuevo

Se copiaron físicamente desde el repositorio original:

- `wp-content/uploads/2023/04/` → `assets/images/original/`;
- favicons y manifest → `assets/icons/`.

El nuevo sitio no necesita cargar estas imágenes desde el WordPress antiguo.

## Contenidos migrados

Además de las páginas principales del nuevo esquema, se han trasladado como artículos propios:

- `articulos/como-es-el-estado-regresivo/`;
- `articulos/terapia-regresiva-vs-regresion/`.

Se conserva el contenido editorial del sitio original y se elimina el envoltorio de WordPress.

Las páginas `terapia-regresiva/` y `como-trabajo/` reúnen y reorganizan respectivamente el contenido principal de “Qué es la terapia regresiva” y “Mi método”.

## Biblioteca

La biblioteca continúa siendo una sección secundaria de apoyo:

- `/biblioteca-de-terapia-regresiva/`;
- `/autores/`;
- `/autores/michael-newton/`;
- `/autores/michael-newton/libros/...`.

No se presenta como eje principal de la navegación.

## Antes de producción

1. Cambiar `<base href="/mtr/">` por `<base href="/">`.
2. Retirar `noindex,nofollow`.
3. Añadir canonical definitivos.
4. Revisar sitemap y robots en la raíz del dominio.
5. Comprobar redirecciones desde las URLs antiguas.
6. Validar accesibilidad, enlaces, imágenes y metadatos en la URL definitiva.
