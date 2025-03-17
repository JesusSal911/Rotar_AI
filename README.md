# Rotar AI

## Enlace al Sitio Web

Puedes visitar la página web en el siguiente enlace: https://jesussal911.github.io/Rotar_AI/

# MAYOR RETO
✏️ Asegurar el diseño responsivo y la traducción con adaptación de espacio. En el caso de la traducción debe ajustarse al espacio disponible al cambiar de idioma, buscando la mayor cercanía con el texto original.
![image](https://github.com/user-attachments/assets/0fd06397-b239-42be-830a-9ec85c68b9ef)


## Tecnologías Utilizadas

- **HTML5**: Estructura y contenido de la página.
- **CSS3**: Estilos y diseño visual.
- **JavaScript**: Funcionalidades interactivas y dinámicas.

## Estructura del Proyecto

El proyecto se organiza de la siguiente manera:

```
Rotar_AI/
│
├── css/
│   └── estilos.css
│
├── img/
│   └── molecula.png
│
├── js/
│   └── main.js
│
├── language/
│   └── es.json
│
├── index.html
└── README.md
```

## Proceso de Desarrollo

1. **Diseño del Layout**: Se definió una estructura de navegación clara con un menú interactivo y secciones destacadas.

   ```html
   <nav>
       <ul>
           <li><a href="#inicio">Inicio</a></li>
           <li><a href="#caracteristicas">Características</a></li>
           <li><a href="#contacto">Contacto</a></li>
       </ul>
   </nav>
   ```

2. **Estilizado con CSS**: Se aplicaron estilos modernos, utilizando propiedades como `display: flex` para el diseño de las secciones y `clip-path` para formas personalizadas.

   ```css
   .seccion {
       display: flex;
       background-color: #efefef;
       border-radius: 2rem;
       clip-path: path("M 63.33 370 Q 0 370 0 308.33 V 63.33 Q 0 0 63.33 0 H 610 Q 650 0 650 24.67 Q 650 51.67 678 51.67 H 900 Q 950 51.67 950 101.67 V 258.33 Q 950 308.33 900 308.33 H 755 Q 715 308.33 715 332 Q 715 370 685 370 H 38 Z");
   }
   ```

3. **Implementación de Funcionalidades**: Se añadieron animaciones y efectos interactivos para mejorar la experiencia del usuario.

   ```javascript
   document.querySelector('.boton').addEventListener('click', function() {
       alert('¡Gracias por tu interés!');
   });
   ```

## Capturas de Pantalla

![image](https://github.com/user-attachments/assets/40e3d63b-1e5a-4ab0-8007-3f27ec4ee24c)
*En esta parte podemos apreciar el contenido ordenado, contiene la propiedad Clip-path para ajustar los recortes en los bordes de las imagenes y contenidos, ademas de una animacion en el texto y en nav*

![image](https://github.com/user-attachments/assets/afdb3249-685d-4055-b483-686ea09910ea)
*Esta seccion tambien tiene Clip-path, incluimos dos botones con hover para asi darle un efecto de dinamismo a la página*
