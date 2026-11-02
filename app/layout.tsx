import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'TecnoSystem | Tecnología a tu ritmo', description: 'Explora celulares, audio y accesorios en TecnoSystem.' };
export default function Layout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="es"><body>{children}</body></html>; }
