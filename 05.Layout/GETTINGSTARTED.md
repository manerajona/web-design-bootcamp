# Layout

## Grid

Si tomamos la pantalla y la dividimos en columnas iguales, lo que obtenemos es un Grid. Estas columnas nos permiten alinear los elementos con el fin de lograr armonía en nuestros diseños.

Un estandar en diseño es el uso de Grid de 12 columnas de 20 a 40 px de ancho cada una.

<img width="1511" alt="image" src="https://user-images.githubusercontent.com/21185543/120907572-1a344200-c639-11eb-84f3-86a3f21f73c4.png">

## Jerarquía Visual

La jerarquía visual se puede definir como la composición de elementos en un diseño, de modo que haya una diferencia entre ellos, y esta diferencia tenga un orden visual. 

La jerarquía visual hace que un diseño parezca más organizado, fácil de entender, estéticamente atractivo y, también, mejora la organización de la información.

<img width="1548" alt="image" src="https://user-images.githubusercontent.com/21185543/120907682-f0c7e600-c639-11eb-8bac-f752f27c7033.png">

## Proximidad

Otra característica del buen diseño es colocar los elementos relecionados cerca unos de otros. La idea de proximidad sigue dos reglas esenciales:
1. Los elementos relacionados deben estar cerca.
2. Los elementos que NO están relacionados deben ser apartados.

<img width="1523" alt="image" src="https://user-images.githubusercontent.com/21185543/120923593-d7f51a00-c6a5-11eb-87e5-b8e038dcfc75.png">

## Semantic HTML

Los elementos HTML semánticos son aquellos que describen claramente su significado de forma legible para el ser humano y la máquina.

Elementos como ```<header>, <footer>, <article> y <figure>``` se consideran semánticos porque describen con precisión el propósito del elemento y el tipo de contenido que hay dentro de ellos. Actúan como elementos ```<div>```, los que debemos evitar ya que su semántica no aporta información sobre su contenido.

![image](https://user-images.githubusercontent.com/21185543/120931893-e7865a00-c6c9-11eb-8d5f-8f55b75add50.png)

### Categorías de contenido

Cada elemento HTML es miembro de una o más categorías de contenido, estas categorías agrupan elementos que comparten características comunes. Esta agrupación ayuda a definir y describir como utilizar los elementos en forma correcta.

![image](https://user-images.githubusercontent.com/21185543/120924353-c6157600-c6a9-11eb-8a10-f3efd06c31c3.png)

#### Metadata

Los elementos pertenecientes a la categoría contenido de metadatos modifican la presentación o el comportamiento del resto del documento, establecen enlaces a otros documentos o transmiten otra información fuera de banda. Los elementos que pertenecen a esta categoría son ```<base>, <link>, <meta>, <noscript>, <script>, <style> y <title>```.

#### Flow Content
  
Los elementos que pertenecen a la categoría de flujo de contenido suelen contener texto o contenido incrustado. Son: ```<a>, <abbr>, <address>, <article>, <aside>, <audio>, <b>,<bdo>, <bdi>, <blockquote>, <br>, <button>, <canvas>, <cite>, <code>, <data>, <datalist>, <del>, <details>, <dfn>, <div>, <dl>, <em>, <embed>, <fieldset>, <figure>, <footer>, <form>, <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, <header>, <hgroup>, <hr>, <i>, <iframe>, <img>, <input>, <ins>, <kbd>, <label>, <main>, <map>, <mark>, <math>, <menu>, <meter>, <nav>, <noscript>, <object>, <ol>, <output>, <p>, <picture>, <pre>, <progress>, <q>, <ruby>, <s>, <samp>, <script>, <section>, <select>, <small>, <span>, <strong>, <sub>, <sup>, <svg>, <table>, <template>, <textarea>, <time>, <ul>, <var>, <video> y <wbr>```.

#### Sectioning

Los elementos que pertenecen al modelo de contenido de secciones crean proximidad. Los elementos que pertenecen a esta categoría son ```<article>, <aside>, <nav> y <section>```.

#### Heading

El contenido del encabezado define el título de una sección. Los elementos que pertenecen a esta categoría son ```<h1>, <h2>, <h3>, <h4>, <h5>, <h6> y <hgroup>```.

#### Phrasing

El contenido de redacción define el texto y la redacción de párrafos. Los elementos que pertenecen a esta categoría son: ```<abbr>, <audio>, <b>, <bdo>, <br>, <button>, <canvas>, <cite>, <code>, <data>, <datalist>, <dfn>, <em>, <embed>, <i>, <iframe>, <img>, <input>, <kbd>, <label>, <mark>, <math>, <meter>, <noscript>, <object>, <output>, <picture>, <progress>, <q>, <ruby>, <samp>, <script>, <select>, <small>, <span>, <strong>, <sub>, <sup>, <svg>, <textarea>, <time>, <var>, <video> y <wbr>```.

#### Embedded

El contenido incrustado importa otro recurso o inserta contenido de otro lenguaje de marcado (como Markdown). Los elementos que pertenecen a esta categoría incluyen: ```<audio>, <canvas>, <embed>, <iframe>, <img>, <math>, <object>, <picture>, <svg> y <video>```.

#### Interactive

El contenido interactivo incluye elementos diseñados específicamente para la interacción del usuario. Los elementos que pertenecen a esta categoría incluyen: ```<a>, <button>, <details>, <embed>, <iframe>, <label>, <select> y <textarea>```.

#### Formularios

El contenido asociado a un formulario comprende elementos expuesto mediante un atributo ```form```. Los elementos que pertenecen a esta categoría ```<button>, <fieldset>, <input>, <keygen>, <label>, <meter>, <object>, <output>, <progress>, <select> y <textarea>```.

## Diseño Responsive

El diseño web responsive o adaptativo es una técnica de diseño web que busca la correcta visualización de una misma página en distintos dispositivos. Desde ordenadores de escritorio a tablets y móviles.

Consiste en redimensionar y colocar los elementos de la web de forma que se adapten al ancho de cada dispositivo permitiendo una correcta visualización y una mejor experiencia de usuario. Se caracteriza porque los layouts son fluidos, para esto se utiliza Flexbox y Media Queries de CSS.

> **PROTIP**: Cuando diseñemos la vista para los dispositivos móviles utilizar imágenes de menor resolución para acelerar la carga (ya que puede estar utilizando un pack de datos).

![image](https://user-images.githubusercontent.com/21185543/120931120-9b85e600-c6c6-11eb-9e4c-79ff0f2ac880.png)

### SPA

Una web SPA (Single Page Application) es una página web la cual está todo el contenido en una sola página y todo se produce dentro de un único archivo **index.html**. De esta manera se puede ofrecer una experiencia más fluida, más rápida.

## Unidad Viewport

Las “unidades de longitud porcentuales de ventana de visualización” (viewport-percentage lengths) o más comúnmente llamadas **viewport units** son unidades css relativas a la ventana gráfica del navegador o visualizador.

La anchura/altura de nuestro navegador donde se visualiza la web se denomina **bloque inicial**, y su medida nos permite definir las dimensiones porcentuales de anchura/altura de todos los elementos que contiene.

Este **bloque inicial** o ventana gráfica puede considerarse el contenedor padre de toda nuestra web, y las unidades **vh** y **vw** son las unidades en altura y anchura relativos a este bloque o ventana.

### vh (viewport-height) = Altura de la ventana gráfica.

![image](https://user-images.githubusercontent.com/21185543/121008817-c9703680-c769-11eb-824c-1efd3a8c05d8.png)

### vw (viewport-width) = Anchura de la ventana gráfica.

![image](https://user-images.githubusercontent.com/21185543/121008908-e278e780-c769-11eb-911e-565a0f79ecf0.png)

Sus valores se expresan en porcentaje (de 0 a 100). Ejemplos:

- width:100vw; (anchura del 100% de la anchura de la ventana gráfica)
- height:50vh; (altura del 50% de la altura de la ventana gráfica)
- line-height:3vh; (altura de línea del 3% de altura de la ventana gráfica)

## Font boosting

Para intentar ofrecer la mejor experiencia, los navegadores móviles renderizan la página a la anchura de la pantalla de los ordenadores de sobremesa - normalmente **980px** - y luego intentan que el contenido se vea mejor aumentando el tamaño de las fuentes y escalando el contenido para que se ajuste a la pantalla. Para los usuarios, esto significa que los tamaños de las fuentes pueden aparecer de forma inconsistente y que tienen que hacer zoom para ver e interactuar con el contenido.

## Links útiles:

- MDN Content Categories docs: https://developer.mozilla.org/es/docs/Web/Guide/HTML/Content_categories
- MDN media docs: https://developer.mozilla.org/es/docs/Web/CSS/@media
- Google responsive design: https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns?hl=ro-ro&skip_cache=false
- Position: https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/
- Viewport: https://web.dev/responsive-web-design-basics/#viewport
- Stacking context: https://developer.mozilla.org/es/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
