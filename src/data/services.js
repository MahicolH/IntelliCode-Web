import web from '../assets/web.webp';
import automatic from '../assets/automatic.webp';
import system from '../assets/system.webp';

export const services = [
  {
    id: 'web',
    tag: 'Desarrollo web y e-commerce',
    title: 'Páginas web rápidas, claras y orientadas a ventas.',
    text: 'Sitios y tiendas en línea que cargan rápido, se leen bien en el celular y llevan al cliente hasta el contacto o la compra.',
    image: web,
    alt: 'Persona cargando tres ventanas de navegador con marcas de verificación',
    wide: true,
  },
  {
    id: 'apps',
    tag: 'Apps móviles y web',
    title: 'Aplicaciones móviles y web que se sienten naturales de usar.',
    text: 'Diseñamos apps nativas y multiplataforma para Android e iOS, y aplicaciones web con interfaces intuitivas.',
  },
  {
    id: 'empresarial',
    tag: 'Gestión empresarial',
    title: 'Software empresarial para controlar tu operación.',
    text: 'Herramientas para administrar inventario, ventas, facturación y clientes en un solo lugar.',
  },
  {
    id: 'automatizacion',
    tag: 'IA y automatización',
    title: 'Elimina tareas repetitivas y optimiza tus procesos.',
    text: 'Flujos automáticos, scripts a la medida y modelos de inteligencia artificial para ahorrar tiempo.',
    image: automatic,
    alt: 'Robot verde de cuatro brazos sosteniendo documentos, una carpeta, una llave y una nota aprobada',
    wide: true,
  },
  {
    id: 'medida',
    tag: 'Desarrollo a la medida',
    title: 'Sistemas personalizados adaptados a tus reglas de negocio.',
    text: 'Si tu proceso es único, creamos el software desde cero, o la plantilla avanzada en Excel y tableros que tu equipo necesita.',
    image: system,
    alt: 'Tienda con letrero OPEN dentro de una ventana de navegador',
    wide: true,
  },
  {
    id: 'cta',
    tag: '¿Tienes una idea?',
    title: 'Cuéntanos tu proyecto y lo hacemos realidad.',
    text: 'Evaluamos tus necesidades y te entregamos una propuesta clara, sin compromiso.',
    cta: { label: 'Escríbenos', href: '#contacto' },
  },
];
