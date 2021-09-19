# HTML 5

HTML - HyperText Markup Language - es el componente más básico de la Web. Define el significado y la estructura del contenido web. "Hipertexto" hace referencia a los enlaces o "links" que conectan páginas web entre sí, ya sea dentro de un único sitio web o entre diferentes sitios web.

## Naming
El sitio por defecto o "home page" se nombra siempre como **index.html** y se ubica en la carpeta raíz del proyecto.
  
## Etiquetas y Atributos

HTML utiliza **etiquetas** o "tags" para (valga la redundancia) etiquetar texto, imágenes y otro contenido que se va a mostrar en un navegador web. Un elemento HTML se distingue de otro texto en un documento mediante sus etiquetas, que consisten en el nombre del elemento rodeado por "<" y ">".

Una **etiqueta** debe abrirse y cerrarse, especificando que en ese lugar del texto se renderizará - dibujará - un elemento determinado. 
  
Asimismo, podemos agregar **atributos** a las etiquetas. Hay atributos generales (como el atributo clase ```class=”classname”``` y el atributo identificador  ```id="idName"```), y hay atributos particulares de cada etiqueta.

<img width="538" alt="image" src="https://user-images.githubusercontent.com/21185543/123523059-b3ce9c80-d697-11eb-82f2-9e497f01e444.png">

El nombre de un elemento dentro de una etiqueta no distingue entre mayúsculas y minúsculas. Es decir, se puede escribir en mayúsculas, minúsculas o ambos. Por ejemplo, la etiqueta  ```<title>``` se puede escribir como ```<Title>```, ```<TITLE>``` o de cualquier otra forma.

  
## Estructura básica de HTML5

De manera muy general, una página web construida con HTML tiene una estructura similar a un cuerpo humano, con una cabeza ```<head>``` y un cuerpo ```<body>```.

En el **HEAD** se encuentra lo que llamamos la **Metadata** que son los datos de la página como título, idioma, descripción del sitio, SEO, sistema de caractéres (UTF-8) y compatibilidad con dispositivos (viewport).

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi sitio web</title>
</head>
<body>
  <!-- estructura de mi sitio -->
</body>
</html>
```

## Links útiles:
- MDN docs: https://developer.mozilla.org/es/docs/Web/HTML
- Elementos: https://developer.mozilla.org/es/docs/Web/HTML/Element
- Ver elementos soportados por browser: https://caniuse.com/
- Editor online: https://codepen.io/pen/
- Atajos para crear html: https://docs.emmet.io/cheat-sheet/
- Visual Studio Code: https://code.visualstudio.com/Download
