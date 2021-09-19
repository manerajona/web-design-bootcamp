# Font Formats & SVG

## Font Formats

### Embedded Open Type (EOT)

Las fuentes EOT fueron diseñadas por Microsoft para ser utilizadas en la web. Es un intento de solucionar problemas de copyright de TTF y OTF al publicar en la web. EOT utiliza una herramienta de Microsoft para crear una fuente a partir de fuentes TTF/OTF existentes. La compresión y el subconjunto hacen que los archivos de fuentes sean más pequeños. El subconjunto proporciona cierta protección de los derechos de autor, pero EOT también utiliza la encriptación para una mayor protección. ¿Suena prometedor? Sí, pero el formato EOT sólo es compatible con Internet Explorer.

### OpenType (OTF)

OpenType es la evolución de TTF. Es el resultado de un esfuerzo conjunto entre Adobe y Microsoft. Las fuentes OpenType contienen los datos de las fuentes de pantalla e impresora en un solo componente. OTF tiene varias capacidades exclusivas, como la compatibilidad con múltiples plataformas y conjuntos de caracteres ampliados. Las fuentes OTF pueden ser utilizadas por los sistemas operativos Macintosh y Windows.

OTF también permite almacenar hasta 65.000 caracteres. Este espacio adicional da a los diseñadores la libertad de incluir complementos como cifras de estilo antiguo, caracteres alternativos y otros extras que antes tenían que distribuirse como fuentes separadas.

### TrueType Font (TTF)

El formato de fuentes TrueType fue desarrollado por Apple y Microsoft como respuesta al formato de fuentes PostScript. TTF ha sido durante mucho tiempo el formato más común para las fuentes en los sistemas operativos Mac y Windows. Todos los principales navegadores lo soportan.

TTF permite el tipo más básico de gestión de derechos digitales: un "flag" o bandera que especifica si el autor permite incrustar el archivo de fuentes en archivos PDF y sitios web. Existen algunas herramientas que permiten modificar esta bandera, lo que constituye uno de los principales problemas del formato TTF. Otro inconveniente es que las fuentes TTF/OTF no están comprimidas y, por lo tanto, tienen un tamaño de archivo mayor.

### Web Open Font Format (WOFF)

WOFF es básicamente un OTF o TTF con metadatos y compresión compatible con los principales navegadores. Fue creado para vivir en la web. Es el resultado de la colaboración entre la Fundación Mozilla, Microsoft y Opera Software. Como las fuentes están comprimidas, se cargan más rápidamente. Los metadatos permiten incluir los datos de la licencia dentro del archivo de la fuente para resolver los problemas de derechos de autor. Es una recomendación del World Wide Web Consortium (WC3) y es el futuro de los formatos de fuentes.

### Scalable Vector Graphics (SVG)

Las fuentes SVG se definen mediante el elemento "font" del SVG. Estas fuentes se renderizan como si fueran un único objeto vectorial en la imagen SVG. El mayor inconveniente de las fuentes SVG es la ausencia de font-hinting. El font hinting es una información extra incrustada para renderizar tamaños de fuente pequeños con calidad y legibilidad. Además, SVG no es ideal para el cuerpo de texto. Como la selección de texto no funciona en Safari, Safari Mobile y Chrome, no puedes seleccionar caracteres individuales, palabras o cualquier selección personalizada. Sólo puede seleccionar toda la fila o el párrafo de texto.

Sin embargo, si te diriges a usuarios de iPhone y iPad, las fuentes SVG son tu única opción. Este es el único formato de archivo permitido por la versión 4.1 e inferior de Safari para iOS.

### Browser Support

|   |EOT|OTF/TTF|WOFF|WOFF2|SVG|
|---|---|-------|----|-----|---|
|Explorer 8-11| X |   |   |   |   |
|Edge 12-14   | X | X | X |   |   |
|Firefox 40-45|   | X | X | X |   |
|Chrome 43-49 |   | X | X | X |   |
|Safari 8-9   |   | X | X |   | X |
|Opera 32-35  |   | X | X | X |   |
|IOS Safari   |   | X | X |   | X |
|Android      |   | X | X |   |   |

## Formas básicas en SVG

Para insertar un documento SVG en nuestra página utilizamos los tags ```<svg></svg>```. Dentro del documento SVG los diferentes elementos corresponden a diferentes formas, y toman diferentes parámetros para describir su tamaño y la posición. Es importante mantener los documentos SVG tan cortos y legibles como sea posible. 

Por ejemplo, estas formas:

![image](https://user-images.githubusercontent.com/21185543/122041980-f8ad2600-cdaf-11eb-8f1a-83817ac04a1c.png)

Fueron generadas por este código:

```xml
<svg version="1.1"
     xmlns="http://www.w3.org/2000/svg"
     width="200"
     height="250">

    <rect x="10" y="10" width="30" height="30" stroke="red" fill="black" stroke-width="5"/>

    <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="yellow" stroke-width="5" />

    <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>

    <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

    <line x1="10" y1="110" x2="190" y2="250" stroke="purple" fill="transparent" stroke-width="5"/>

    <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
              stroke="hotpink" fill="transparent" stroke-width="5"/>

    <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
             stroke="green" fill="transparent" stroke-width="5"/>

    <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>
```

### Rectángulo

El elemento ```<rect>``` dibuja un rectángulo en la pantalla. Hay 6 atributos básicos que controlan la posición y la forma de los rectángulos en la pantalla. El de la derecha tiene sus parámetros rx y ry establecidos, dándole esquinas redondeadas. Si no están configurados, se ponen por defecto a 0.

- ```x``` La posición x de la esquina superior izquierda del rectángulo.
- ```y``` La posición y de la esquina superior izquierda del rectángulo.
- ```width``` El ancho del rectángulo
- ```height``` La altura del rectángulo
- ```rx``` El radio x de las esquinas del rectángulo
- ```ry``` El radio en y de las esquinas del rectángulo 

### Círculo

El elemento ```<circle>``` dibuja un círculo en la pantalla. Toma 3 parámetros básicos para determinar la forma y el tamaño del elemento.

- ```r``` El radio del círculo.
- ```cx``` La posición x del centro del círculo.
- ```cy```La posición y del centro del círculo. 

### Elipse

Una ```<elipse>``` es una forma más general del elemento ```<circle>```, en la que se pueden escalar los radios x e y (comúnmente denominados ejes semimayor y semiminor en matemáticas) del círculo por separado.

- ```rx```El radio x de la elipse.
- ```ry```El radio en y de la elipse.
- ```cx```Posición x del centro de la elipse.
- ```cy```La posición y del centro de la elipse. 

### Línea

El elemento ```<line>``` toma las posiciones de dos puntos como parámetros y dibuja una línea recta entre ellos.

- ```x1``` La posición x del punto 1.
- ```y1``` La posición y del punto 1.
- ```x2``` La posición en x del punto 2.
- ```y2``` La posición y del punto 2.

### Polilínea

Una ```<polyline>``` es un grupo de líneas rectas conectadas. Como la lista de puntos puede ser bastante larga, todos los puntos se incluyen en un atributo:

- ```points``` Una lista de puntos. Cada número debe estar separado por un espacio, una coma, un EOL o un carácter de avance de línea. Cada punto debe contener dos números: una coordenada x y una coordenada y. Así, la lista (0,0), (1,1) y (2,2) se escribiría como 0, 0 1, 1 2, 2.

### Polígono

Un ```<polygon>``` es similar a una ```<polyline>```, en el sentido de que está compuesto por segmentos de línea recta que conectan una lista de puntos. Sin embargo, en el caso de los polígonos, la trayectoria conecta automáticamente el último punto con el primero, creando una forma cerrada.

- ```points``` Una lista de puntos, cada número separado por un espacio, una coma, un EOL o un carácter de avance de línea. Cada punto debe contener dos números: una coordenada x y una coordenada y. Así, la lista (0,0), (1,1) y (2,2) se escribiría como 0, 0 1, 1 2, 2. A continuación, el dibujo cierra la trayectoria, por lo que se dibujaría una línea recta final desde (2,2) hasta (0,0). 

### Path

Un ```<path>``` es la forma más general que puede utilizarse en SVG. Con un elemento path se pueden dibujar rectángulos (con o sin esquinas redondeadas), círculos, elipses, polilíneas y polígonos. Básicamente cualquiera de los otros tipos de formas, curvas de Bézier, curvas cuadráticas, y muchas más.

- ```d``` (draw) Es una lista de puntos y otra información sobre cómo dibujar un path.

## SVG Paths

El elemento ```<path>``` es el más potente de la biblioteca SVG de formas básicas. Se puede utilizar para crear líneas, curvas, arcos y mucho más.

Las trayectorias crean formas complejas mediante la combinación de múltiples líneas rectas o curvas. Un buen conocimiento de los trazados es importante para dibujar en SVG. Aunque no se recomienda crear trazados complejos utilizando un editor XML o un editor de texto, pero entender cómo funcionan te permitirá identificar y reparar problemas de visualización en los SVG.

La forma de un elemento ```<path>``` está definida por un parámetro: ```d``` (draw). El atributo ```d``` contiene una serie de comandos y parámetros utilizados por esos comandos.

Cada uno de los comandos es instanciado (por ejemplo, crear una clase, nombrarla y localizarla) por una letra específica. Por ejemplo, vamos a movernos a las coordenadas x e y (10, 10). El comando "Mover a" se llama con la letra ```M```. Cuando el analizador sintáctico se encuentra con esta letra, sabe que tiene que moverse a un punto. Así, para moverse a (10,10) el comando a utilizar sería ```M 10 10```. Después de eso, el analizador sintáctico comienza a leer el siguiente comando.

Todos los comandos también vienen en dos variantes. **Una letra mayúscula especifica coordenadas absolutas en la página, y una letra minúscula especifica coordenadas relativas** (por ejemplo, mover 10px hacia arriba y 7px hacia la izquierda desde el último punto).

### M
Moverse a un punto del canvas.

### L
Dibujar una línea desde un punto hasta otro del canvas.
    
### l
Dibujar una línea desde donde nos encontremos hasta otro punto del canvas.

### V
Dibujar una línea vertical en el eje de las y.

### v
Dibujar una línea en el eje de las y desde donde nos encontremos hasta esa distancia.

### H
Dibujar una línea vertical en el eje de las x.

### h
Dibujar una línea en el eje de las x desde donde nos encontremos hasta esa distancia.

## Stroke & Fill

### Painting

El coloreado básico puede hacerse estableciendo dos atributos en el nodo: ```fill``` (relleno) y ```stroke``` (trazo). El uso del relleno establece el color dentro del objeto y el trazo establece el color de la línea dibujada alrededor del objeto. Puede utilizar los mismos esquemas de nomenclatura de colores css que utiliza en HTML, ya sean keywords, valores rgb (es decir, rgb(255,0,0)), hexadecimales, rgba, etc.

```xml
<rect x="10" y="10" width="100" height="100" stroke="blue" fill="purple" fill-opacity="0.5" stroke-opacity="0.8"/>
```
Además, puede especificar la opacidad del relleno o del trazo por separado en SVG. Estos se controlan mediante los atributos **fill-opacity** y **stroke-opacity**.

### Stroke

Además de sus propiedades de color, hay algunos otros atributos disponibles para controlar la forma en que se dibuja un trazo en una línea.

![imagen](https://user-images.githubusercontent.com/21185543/122549441-dbbf5f80-d008-11eb-8314-154bb9234832.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <line x1="40" x2="120" y1="20" y2="20" stroke="black" stroke-width="20" stroke-linecap="butt"/>
  <line x1="40" x2="120" y1="60" y2="60" stroke="black" stroke-width="20" stroke-linecap="square"/>
  <line x1="40" x2="120" y1="100" y2="100" stroke="black" stroke-width="20" stroke-linecap="round"/>
</svg>
```
La propiedad **stroke-width** define el ancho de este trazo. Los trazos se dibujan centrados alrededor del trazado. En el ejemplo anterior, el trazado se muestra en rosa, y el trazo en negro.

El segundo atributo que afecta a los trazos es la propiedad stroke-linecap, demostrada anteriormente. Esta propiedad controla la forma de los extremos de las líneas.

Hay tres valores posibles para **stroke-linecap**:

1. ```butt``` cierra la línea con un borde recto que es normal (a 90 grados) a la dirección del trazo y cruza su final.
2. ```square``` tiene esencialmente la misma apariencia, pero estira el trazo ligeramente más allá de la trayectoria real. La distancia que el trazo sobrepasa la trayectoria es la mitad del ancho del trazo.
3. ```round``` produce un efecto redondeado en el final del trazo. El radio de esta curva también está controlado por la anchura del trazo

También se puede utilizar la propiedad **stroke-linejoin** para controlar cómo se dibuja la unión entre dos segmentos de línea.

![imagen](https://user-images.githubusercontent.com/21185543/122549980-7d46b100-d009-11eb-8384-317b957e572b.png)

## View Box

El atributo viewBox define la posición y la dimensión de una ventana gráfica SVG dentro de un Canvas o Art Board definido por las propiedades **width** y **height**.

El valor del atributo viewBox es una lista de cuatro números: ```min-x```, ```min-y```, ```width``` y ```height```. Los números, separados por espacios en blanco y/o una coma, especifican un rectángulo en el Canvas o Art Board.

```xml
<!--canvas 200x250 and viewbox 100x100-->
<svg xmlns="http://www.w3.org/2000/svg" 
     width="200" height="250"
     viewBox="0 0 100 100">
  <!--
  with relative unit such as percentage, the visual size
  of the square looks unchanged regardless of the viewBox
  -->
  <rect x="0" y="0" width="100%" height="100%"/>

  <!--
  with a large viewBox the circle looks small
  as it is using user units for the r attribute:
  4 resolved against 100 as set in the viewBox
  -->
  <circle cx="50%" cy="50%" r="4" fill="white"/>
</svg>

<!--canvas 10x10 and viewbox 10x10-->
<svg xmlns="http://www.w3.org/2000/svg" 
     width="10" height="10"
     viewBox="0 0 10 10">
  <!--
  with relative unit such as percentage, the visual size
  of the square looks unchanged regardless of the viewBox
  -->
  <rect x="0" y="0" width="100%" height="100%"/>

  <!--
  with a small viewBox the circle looks large
  as it is using user units for the r attribute:
  4 resolved against 10 as set in the viewBox
  -->
  <circle cx="50%" cy="50%" r="4" fill="white"/>
</svg>

<!--No canvas-->
<svg viewBox="-5 -5 10 10" xmlns="http://www.w3.org/2000/svg">
  <!--
  The point of coordinate 0,0 is now in the center of the viewport,
  and 100% is still resolve to a width or height of 10 user units so
  the rectangle looks shifted to the bottom/right corner of the viewport
  -->
  <rect x="0" y="0" width="100%" height="100%"/>

  <!--
  With the point of coordinate 0,0 in the center of the viewport the
  value 50% is resolve to 5 which means the center of the circle is
  in the bottom/right corner of the viewport.
  -->
  <circle cx="50%" cy="50%" r="4" fill="white"/>
</svg>
```

## Links útiles:
 
- Font Formats: https://creativemarket.com/blog/the-missing-guide-to-font-formats
- MDN svg Tutorial: https://developer.mozilla.org/es/docs/Web/SVG/Tutorial
- MDN svg basic shapes: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
- Svg Paths: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
- Svg Fills & Strokes: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes
- View Box: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox
- Inkscape Download: https://inkscape.org/release/inkscape-1.1/
