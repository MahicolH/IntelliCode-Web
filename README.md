# IntelliCode Analytics & Software — Web Landing Platform

## 📌 Descripción General

Este repositorio alberga el código fuente del portal web oficial de **IntelliCode Analytics & Software**[cite: 1, 2, 3]. La plataforma actúa como la vitrina digital principal de la empresa, diseñada para presentar la oferta de valor en soluciones de software a la medida, captar clientes potenciales y conectar directamente con el ecosistema de aplicaciones de la firma[cite: 1, 2, 3].

---

## 🎯 Objetivos de la Plataforma

- **Presencia Comercial y Conversión:** Exponer la propuesta de valor del desarrollo de software empresarial, páginas web y soluciones tecnológicas avanzadas[cite: 2].
- **Muestra de Portafolio:** Presentar casos de éxito, proyectos destacados y soluciones personalizadas desarrolladas para diversos sectores[cite: 2].
- **Línea Educativa (IntelliClass):** Difundir la iniciativa de formación práctica e interactiva enfocada en tecnología[cite: 2].
- **Ecosistema Unificado:** Servir como puente de entrada hacia las aplicaciones web y plataformas SaaS operadas por IntelliCode[cite: 1, 3].

---

## 🏛️ Arquitectura del Sistema y Módulos

La aplicación está construida sobre una arquitectura modular cliente-servidor desacoplada[cite: 1, 3], estructurada en las siguientes secciones estratégicas:

### 1. Cabecera y Navegación Principal
- Menú responsivo con navegación fluida por secciones[cite: 2].
- **Integración de Aplicativo:** Botón de acceso dinámico hacia la plataforma web principal (`appUrl`), activado automáticamente según la disponibilidad del entorno[cite: 1, 3].

### 2. Módulo Hero (Propuesta de Valor)
- Presentación directa del impacto comercial del software a la medida[cite: 2].
- Llamados a la acción (CTA) directos para cotizaciones vía WhatsApp y correo electrónico corporativo[cite: 1, 2, 3].

### 3. Catálogo de Servicios ("Lo que hacemos")
Exposición en diseño tipo Bento Grid con cobertura de los pilares clave del negocio[cite: 2]:
- Desarrollo de Páginas Web y Comercio Electrónico[cite: 2].
- Software Empresarial y Sistemas para Negocios[cite: 2].
- Análisis y Soluciones con Inteligencia Artificial[cite: 2].
- Automatizaciones de Procesos y Servicios de Soporte/Mantenimiento[cite: 2].

### 4. IntelliClass
- Módulo dedicado a la presentación del programa educativo práctico "aprende haciendo", diseñado para la formación tecnológica de clientes y comunidad[cite: 2].

### 5. Portafolio de Proyectos
- Exhibición de aplicaciones y sistemas desarrollados, con fichas de descripción, tecnologías aplicadas y enlaces de prueba o consulta[cite: 2].

### 6. Presentación del Fundador / Identidad de Marca
- Reproductor multimedia nativo optimizado con video institucional y póster de alta definición para la introducción ejecutiva del fundador[cite: 1, 2].

### 7. Centro de Atención y Preguntas Frecuentes (FAQ)
- Módulo interactivo desplegable que resuelve inquietudes operativas sobre presupuestos, metodologías de trabajo y tiempos de entrega[cite: 2].

---

## ⚙️ Especificaciones Técnicas

- **Frontend Core:** React.js[cite: 1, 3]
- **Tooling & Bundler:** Vite[cite: 1, 3]
- **Estilos & UI:** CSS3 nativo desacoplado mediante variables globales de diseño (soporte para temas oscuros/claros, microinteracciones y respuesta adaptativa)[cite: 1, 2, 3].
- **Gestión de Configuración:** Parametrización centralizada (`src/config.js`) para credenciales de contacto, enlaces sociales y endpoints de aplicaciones vinculadas[cite: 1, 3].
- **Gestión de Datos:** Datasets estructurados e independientes (`src/data/`) para administración ágil de contenidos sin alterar la lógica de presentación[cite: 1, 3].

---

<p align="center">
  <b>IntelliCode Analytics & Software</b> • Repositorio Privado Corporativo
</p>