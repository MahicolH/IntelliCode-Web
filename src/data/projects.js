import erp from '../assets/proyectos-erp.webp';
import data from '../assets/proyectos-data.webp';
import web from '../assets/proyectos-web.webp';

export const projects = [
  {
    id: 'erp',
    tag: 'Sistemas & ERP',
    title: 'Inventario y facturación para comercios',
    text: 'Sistema que reúne productos, ventas y facturación de un comercio en un solo lugar, con control del inventario.',
    image: erp,
    width: 541,
    height: 371,
    alt: 'Tablero de un sistema de inventario con tabla de productos y gráficas de ventas y stock',
    stack: ['PostgreSQL', 'React', 'Control Total'],
  },
  {
    id: 'data',
    tag: 'Servicios de data',
    title: 'Tablero de ventas y métricas en Excel',
    text: 'Reporte con indicadores clave que se actualiza solo, para que el negocio decida con datos claros.',
    image: data,
    width: 507,
    height: 415,
    alt: 'Gráficas de barras con flecha de crecimiento junto a una hoja de cálculo y símbolos de porcentaje',
    stack: ['Excel Avanzado', 'Power BI', 'Reportes 100% Auto'],
  },
  {
    id: 'web',
    tag: 'Páginas web',
    title: 'Plataformas web y sitios corporativos',
    text: 'Sitios rápidos y claros, pensados para que los clientes encuentren al negocio y se pongan en contacto.',
    image: web,
    width: 527,
    height: 385,
    alt: 'Varias ventanas de navegador conectadas entre sí con un cursor sobre una de ellas',
    stack: ['Vite + React', 'SEO Optimizado', 'Alta Conversión'],
  },
];
