# CSS

Hojas de Estilo en Cascada o "Cascading Style Sheets" es el lenguaje de estilos utilizado para describir la presentación de documentos HTML. CSS describe como debe ser renderizado un elemento estructurado en la pantalla. CSS es uno de los lenguajes base y posee una especificación estandarizada por parte del W3C, siendo CSS3 la útlima versión oficial. 

## Naming
No hay reglas específicas de como nombrar archivos **.css**, pero como lineamiento general utilizar caracteres alfanuméricos y NO USAR NI ESPACIOS NI MAYÚSCULAS. Es considerado una buena práctica organizar nuestro código en carpetas que agrupen archivos similares, en el caso de las hojas de estilos se agrupan en una carpeta llamada **css**.

## Cascada

Los estilos siguen un **orden en cascada** que es lo que determina qué regla de estilo utilizará el navegador cuando haya reglas en conflicto. Se define como "*el proceso de combinar diferentes hojas de estilo y de poder resolver potenciales conflictos entre diferentes reglas y declaraciones CSS, cuando más de una regla se aplica a un determinado elemento*".

## Estilos Inline, Embedded y Linked

Una de las carácteristicas de CSS es que puede implementarse de tres maneras diferentes. 

### Estilos en línea (inline)

Una regla de estilo en línea se agrega directamente en una etiqueta HTML al igual que un atributo HTML. El propósito de los estilos en línea es permitirte anular una regla de estilo definida en una hoja de estilo o hacer un cambio rápido cuando no es necesaria una regla reutilizable. A pesar de su flexibilidad su uso es considerado una mala práctica.

```html
<selector style="property-1: value-1; property-2: value-2; property-N: value-N"> </selector>
```

### Estilos embebidos (embedded)

Los estilos embebidos se establecen en la sección HEAD. Al igual que una regla "inline", los estilos embebidos anulan las reglas de una hoja de estilo externa. La diferencia es que una hoja de estilo embebida tiene la misma funcionalidad que un archivo CSS linkeado. Su uso también es considerado una mala práctica.

### Estilos externos linkeados (linked)

Los estilos externos son los menos importantes en el orden de cascada, pero son los más utilizados. Un estilo externo es un enlace colocado en la sección HEAD a un archivo **.css** que contiene las reglas de estilo (Rule-set). La principal ventaja de utilizar estilos externos es que puedes cambiar ese archivo externo y que ese cambio se refleje en todas las páginas de tu sitio que tengan un enlace al archivo CSS externo. Cualquiera o todos los métodos de implementación de CSS pueden ser utilizados en la misma página.

```html
<head>
  <!-- otros tags -->
  <link rel="stylesheet" href="css/styles.css">
</head>
```

## Estructura rule-set

![image](https://user-images.githubusercontent.com/21185543/123498436-576f6c80-d606-11eb-9da0-24e9089d4606.png)


## Basic selectors

|selector|desc|Syntax|
|---|---|---|
|Universal selector|Selecciona todos los elementos de nuestra página|*|
|Type selector|Selecciona elementos HTML de ese tipo|html,body,div,a,(...)|
|Class selector|Selecciona todos los elementos HTML que incluyan ```class="classname"```|.classname|
|ID selector|Selecciona todos los elementos HTML que incluyan ```id="idName"```|#idname|
|Attribute selector|Selecciona todos los elementos HTML que incluyan un determinado atributo|[attr] [attr=value]|


## Specificity

La especificidad es la manera mediante la cual los navegadores deciden qué valores de una propiedad CSS son más relevantes para un elemento y, por lo tanto, serán aplicados.

### ¿Cómo se calcula?

La especificidad es un peso (importancia o valor) que se le asigna a una declaración CSS dada, determinada por el número correspondiente de cada tipo de selector. Cuando varias declaraciones tienen igual especificidad, se aplicará al elemento la última declaración encontrada en el CSS. La especificidad solo se aplica cuando el mismo elemento es objetivo de múltiples declaraciones.

![image](https://user-images.githubusercontent.com/21185543/123497924-25f6a100-d606-11eb-9807-1d222b193264.png)

## Box Model

Al diseñar un documento, el motor de renderizado del navegador dibuja cada elemento como un cuadro rectangular según el estándar **Box Model** de CSS. Este modelo determina tamaño, posición y otras propiedades (color, fondo, tamaño del borde, etc.) de "la caja".

<img width="823" alt="image" src="https://user-images.githubusercontent.com/21185543/123531578-16498c00-d6dc-11eb-9dc1-04d93001f47a.png">

- **Content**: texto, imágenes, etc.
- **Padding**: área transparente alrededor del contenido, dentro de la caja.
- **Border**: va alrededor del relleno y el contenido.
- **Margin**: espacio entre cajas.
- **Fill area**: área que se rellena con color o imagen de fondo.

## Box types (display)

La propiedad de CSS ```display``` especifica el comportamiento de visualización de un elemento. Es imprescindible para controlar el diseño de un elemento y el layout de nuestro sitio.

### iniline
- Muestra un elemento como un elemento en línea. 
- Las propiedades de altura y anchura NO tendrán ningún efecto.
- Padding y Margin solo tienen efecto en forma horizontal (izquierda y derecha).
- Sólo ocupan el ancho de su contenido.

### block
- Comienzan en una NUEVA línea. 
- Ocupan todo el ancho disponible. 
- Ocupan todo el ancho de su elemento padre.
- Permite establecer valores de altura y anchura.

### inline-block
- Muestra un elemento como un bloque a nivel de línea. 
- Puede establecer valores de altura y anchura.
- Es esencialmente lo mismo que inline, excepto que puedes establecer valores de altura y anchura.

## Links útiles:

- MDN docs: https://developer.mozilla.org/es/docs/Web/CSS
- Selectores: https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors
- Propiedades: https://www.w3schools.com/cssref/ 
- Especificidad: https://developer.mozilla.org/es/docs/Web/CSS/Specificity
- Calculador de peso de especificidad: https://specificity.keegan.st/
- Box model: https://developer.mozilla.org/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
- Editor online: https://codepen.io/pen/
- Trucos para CSS: https://css-tricks.com/
