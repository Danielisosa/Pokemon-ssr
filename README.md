# PokéAPI Pro — Angular 21 & SSR Explorer

Una aplicación web moderna, rápida y optimizada para el universo Pokémon, construida sobre las últimas características estables de **Angular** y diseñada con una interfaz futurista minimalista (*Glassmorphism*) utilizando **Tailwind CSS**.

Este proyecto fue desarrollado inicialmente como parte del curso "Angular Pro" de Fernando Herrera y posteriormente rediseñado, optimizado y refinado visual y conceptualmente de manera independiente para formar parte de mi portafolio profesional.

---

## 🚀 Características Clave & Valor Técnico

* **Renderizado en el Servidor (SSR):** Implementación de Server-Side Rendering para una carga inicial ultra rápida, optimización drástica de rendimiento y arquitectura preparada para indexación SEO.
* **Reactividad Moderna con Signals:** Gestión eficiente del estado global de la aplicación y flujos de datos asíncronos aprovechando la potencia de los Angular Signals nativos.
* **Control Flow Nativo & Estado Avanzado:** Uso exclusivo de las últimas directivas de Angular 21 para una sintaxis de plantillas limpia, óptima y de alto rendimiento.
* **Estilo Premium Glassmorphism:** Interfaz de usuario diseñada con Tailwind CSS emulando un panel translúcido de alta tecnología, adaptada completamente al español con un diseño cohesivo y responsivo.
* **Integración de Medios Dinámicos:** Consumo asíncrono desde la API pública para inyectar recursos multimedia dinámicos, incluyendo renders oficiales en alta resolución y el espectro de audio nativo de los gritos (*cries*) de cada espécimen.

---

## 🛠️ Stack Tecnológico

* **Framework:** Angular 21 (TypeScript estrictamente tipado)
* **Estilos:** Tailwind CSS 
* **Gestión de Estado:** Angular Signals & Control Flow
* **Arquitectura:** SSR (Server-Side Rendering)
* **Fuente de Datos:** PokéAPI (RESTful API externa)

---


## 🧪 Pruebas Unitarias (Testing)

Para garantizar la estabilidad de la aplicación, el correcto flujo de las señales (*Signals*) y la integridad de los servicios ante cambios en los datos, el proyecto cuenta con una suite de pruebas unitarias automatizadas.

* **Test Runner:** [Vitest](https://vitest.dev/) (Entorno de ejecución de alto rendimiento y baja latencia).
* **Enfoque:** Validación del ciclo de vida de los componentes, reactividad en el renderizado de tarjetas dinámicas y transporte de datos asíncronos.

Para ejecutar la suite de pruebas locales con Vitest, ejecuta el siguiente comando:

```bash
ng test
```

## 📦 Instalación y Despliegue Local

Sigue estos pasos para clonar el repositorio y ejecutar el entorno de desarrollo local:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/Danielisa/pokemon-ssr.git](https://github.com/Danielisosa/pokemon-ssr.git)
   cd pokemon-ssr

2. **Instalar dependencias:**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo (con soporte SSR):**
```bash
npm run dev
```

Abre http://localhost:4200 en tu navegador para ver el resultado.


## 🌐Despliegue
El proyecto se encuentra desplegado y en vivo en el siguiente enlace:

[![Deploy con Netlify](https://img.shields.io/badge/Netlify-Live_Demo-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://pokemons-ssr-dash.netlify.app/)

