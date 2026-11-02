# TecnoSystem

Frontend educativo de una tienda de electrónicos con Next.js, React y TypeScript. Diseño adaptable con catálogo, búsqueda, filtros, detalle, favoritos y bolsa persistida en el navegador. Compra simulada; no procesa pagos ni crea pedidos reales. Supabase se incorporará en una siguiente etapa.

## Desarrollo

Node.js 22 LTS. Ejecutar `npm ci` y `npm run dev`. Abrir http://localhost:3000.

## Verificación

`npm run typecheck` y `npm run build`. `npm start` sirve la compilación.

## Vercel

Importar el repositorio GitHub y seleccionar Next.js. Build: `npm run build`. No requiere variables de entorno en esta etapa. Las fotografías son remotas desde Unsplash y requieren conexión.

## Docker

`docker build -t tecnosystem .` y `docker run --rm -p 3000:3000 tecnosystem`.

## Aprendizaje

`app/layout.tsx`: documento y metadatos. `app/page.tsx`: interfaz y estado del cliente. `app/globals.css`: diseño adaptable. La bolsa local es demostrativa: en la siguiente etapa los precios, inventario y autorización deberán validarse en servidor.
