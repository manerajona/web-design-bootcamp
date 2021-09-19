# Flexbox

El Módulo de Caja Flexible, comúnmente llamado flexbox, fue diseñado como un modelo unidimensional de layout, y como un método que pueda ayudar a distribuir el espacio entre los ítems de una interfaz y mejorar las capacidades de alineación. Cuando describimos a flexbox como unidimensional destacamos el hecho que flexbox maneja el layout en una sola dimensión a la vez — ya sea como fila o como columna.

No se trata de una sola propiedad, sino que incluye todo un conjunto de propiedades. Algunas de ellas están pensadas para ser establecidas en el contenedor (elemento padre, conocido como "contenedor flex") mientras que las otras están pensadas para ser establecidas en los hijos (llamados "elementos flex"). La figura siguiente explica la idea principal detrás de la disposición flexible.
![image](https://user-images.githubusercontent.com/21185543/123532140-fa94b480-d6e0-11eb-8989-056ccebb6d23.png)

**main axis** - El eje principal de un contenedor flexible es el eje principal a lo largo del cual se disponen los elementos flexibles. Cuidado, no es necesariamente horizontal; depende de la propiedad flex-direction.

**main-start | main-end** - Los elementos flex se colocan dentro del contenedor empezando por main-start y llegando a main-end.

**main size** - La anchura o la altura de un elemento flexible, cualquiera que sea la dimensión principal, es el tamaño principal del elemento. La propiedad de tamaño principal del elemento flexible es la propiedad 'width' o 'height'.

**cross axis** - El eje perpendicular al eje principal se llama eje transversal. Su dirección depende de la dirección del eje principal.

**cross-start | cross-end** - Las líneas flexibles se llenan de elementos y se colocan en el contenedor empezando por el lado de inicio cruzado del contenedor flexible y yendo hacia el lado de final cruzado.

**cross size** - La anchura o la altura de un elemento flexible, cualquiera que esté en la dimensión transversal, es el tamaño transversal del elemento. La propiedad de tamaño transversal es la que se encuentra en la dimensión transversal de 'anchura' o 'altura'.


## Stacking context

El contexto de apilamiento o "stacking context" es la conceptualización tridimensional de los elementos HTML a lo largo de un eje-Z imaginario relativo al usuario que se asume está de cara al viewport o página web. Los elementos HTML ocupan este espacio por orden de prioridad basado en sus atributos.

<img width="999" alt="image" src="https://user-images.githubusercontent.com/21185543/123531994-87d70980-d6df-11eb-8bd2-7e4579c0fdcf.png">


## Links útiles:

- Flexbox guide: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- Flexbox properties: https://cssreference.io/flexbox/
- MDN Flexbox docs: https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
- Position: https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/
- Stacking context: https://developer.mozilla.org/es/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context

