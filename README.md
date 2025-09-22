# 🎬 Películas App

Aplicación web desarrollada en **Angular 16** que consume la **API pública de [The Movie Database (TMDb)](https://www.themoviedb.org/)** para visualizar carteleras, buscar películas, ver detalles y conocer el reparto.

Este proyecto fue creado con el objetivo de reforzar conceptos clave de Angular como:

- Consumo de servicios REST con `HttpClient`
- Modularización en componentes y páginas
- Pipes personalizados
- Observables y RxJS
- Enrutamiento con parámetros dinámicos

## 📸 Demo

🔗 **Visita la demo en línea:** [Películas App en Netlify](https://comforting-lily-4866d0.netlify.app/home)

- **Inicio (Cartelera de películas actuales)**  
  ![Home Screenshot](https://raw.githubusercontent.com/david99cartagena/PeliculasApp/refs/heads/main/media/Screenshot1.png)

  ![Home Screenshot](https://raw.githubusercontent.com/david99cartagena/PeliculasApp/refs/heads/main/media/Screenshot2.png)

- **Búsqueda de películas**  
  ![Search Screenshot](https://raw.githubusercontent.com/david99cartagena/PeliculasApp/refs/heads/main/media/Screenshot3.png)

- **Detalle de película con reparto**  
  ![Detalle Screenshot](https://raw.githubusercontent.com/david99cartagena/PeliculasApp/refs/heads/main/media/Screenshot4.png)

  ![Detalle Screenshot](https://raw.githubusercontent.com/david99cartagena/PeliculasApp/refs/heads/main/media/Screenshot5.png)

## 🚀 Tecnologías Utilizadas

- **Angular 16**
- **RxJS**
- **TypeScript**
- **Swiper.js** → carrusel de slides
- **ngx-stars** → calificación por estrellas
- **Bootstrap / CSS3**
- **TMDb API**

## 📁 Estructura del Proyecto

```
src/
├── app/
│ ├── app-routing.module.ts     # Configuración de rutas
│ ├── app.component.*           # Componente raíz
│ ├── app.module.ts             # Módulo principal
│ ├── components/               # Componentes reutilizables
│ │ ├── cast-slideshow/         # Carrusel de actores/reparto
│ │ ├── navbar/                 # Barra de navegación
│ │ ├── peliculas-poster-grid/  # Grid con posters de películas
│ │ ├── slideshow/              # Carrusel de películas destacadas
│ │ └── components.module.ts
│ ├── interfaces/               # Interfaces TypeScript
│ │ ├── cartelera-response.ts   # Respuesta de cartelera
│ │ ├── credits-response.ts     # Reparto de la película
│ │ └── movie-response.ts       # Detalles de película
│ ├── pages/                    # Páginas principales
│ │ ├── home/                   # Página principal con cartelera
│ │ ├── buscar/                 # Página de búsqueda de películas
│ │ ├── pelicula/               # Página de detalle de película
│ │ └── pages.module.ts
│ ├── pipes/                    # Pipes personalizados
│ │ ├── poster.pipe.ts          # Pipe para manejar posters nulos
│ │ ├── poster.pipe.spec.ts
│ │ └── pipes.module.ts
│ ├── services/                 # Servicios
│ │ ├── peliculas.service.ts    # Lógica de conexión con TMDb
│ │ └── peliculas.service.spec.ts
├── assets/
│ ├── no-image.jpg              # Imagen por defecto
│ └── .gitkeep
├── favicon.ico
├── index.html
├── main.ts
├── styles.css
└── _redirects
```

## 🔑 Funcionalidades

✅ Ver cartelera de películas en cines  
✅ Buscar películas por título  
✅ Visualizar detalles de una película  
✅ Mostrar reparto y actores principales  
✅ Carrusel de películas destacadas  
✅ Calificación de películas con estrellas  
✅ Imagen por defecto cuando no hay poster disponible

## 📦 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/david99cartagena/PeliculasApp.git
```

```bash
cd PeliculasApp
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor local:

```bash
npm start
```

```bash
ng serve
```

La aplicación estará disponible en: `http://localhost:4200/`

## ⚙️ Configuración de API

Este proyecto usa la API pública de The Movie Database (TMDb).

Para usar tu propia API Key:

- Regístrate en [TMDb](https://www.themoviedb.org/documentation/api)
- Obtén tu API Key.
- Ábrelo en el archivo `src/app/services/peliculas.service.ts` y reemplaza:

```ts
private apiKey = 'TU_API_KEY';
```

## 🧠 Conceptos Reforzados

- Uso de HttpClient para peticiones REST
- Observables y operadores RxJS (map, tap, catchError)
- Modularización de componentes y páginas
- Creación de pipes personalizados
- Manejo de rutas dinámicas (/pelicula/:id)
- Manejo de errores y loaders en peticiones HTTP

Basado en el curso de **Fernando Herrera** – [Angular: De Cero a Experto (Edición 2018)](https://www.udemy.com/course/angular-2-fernando-herrera/)
