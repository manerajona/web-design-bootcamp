# Typography

## Categorías
En diseño existen cuatro grandes categorías cuando se trata de tipografías: 

1. **Serif**: Es el éstilo más utilizado en editores de texto. Esta se divide en *Oldstyle*, *Modern* y *Slab*.
1. **Sans Serif**: "Sans" viene del francés "Sin", osea sin serif. Es la más versátil de las tipografías y la más utilizada en diseño web.
1. **Display**: Son de estilo decorativo y se suelen evitar en diseño web.
1. **Script**: Están basadas en la escritura a mano y al igual que las anteriores su uso no es frecuente en diseño web.

<img width="1436" alt="image" src="https://user-images.githubusercontent.com/21185543/120890826-87b18580-c5db-11eb-9509-3ee7414b634c.png">

### Serif vs Sans Serif
La Serif es una línea añadida en cada extremo de los caracteres. Su origen es desconocido. Una teoría sugiere que las Serif proceden del rastro que deja la herramienta (pluma, pincel, etc.) cuando la mano se levanta para completar el gesto de la escritura. Los copistas diferenciaron entonces su estilo personal mediante la estructuración de estas marcas, que se hicieron más pequeñas, sistemáticas y artísticas.

![image](https://user-images.githubusercontent.com/21185543/120890953-4ec5e080-c5dc-11eb-8a81-4307f4b7ae5a.png)

## Espacio entre letras
Esta propiedad permite a las letras tomar "aire" entre ellas creando un efecto denominado "Panorama". El efecto panorama funciona cuando las letras están en mayúsculas y en una sola linea.

<img width="672" alt="image" src="https://user-images.githubusercontent.com/21185543/120891609-e24ce080-c5df-11eb-8b3f-baadf3251361.png">

En CSS la propiedad que utilizamos es **letter-spacing**.
```css 
letter-spacing: 5px;
letter-spacing: -1px;
```

## Espacio entre lineas
A menudo el espacio entre lineas de algunas fuentes no está bien balanceada, cuando se las trata de aplicar a un párrafo. Ocurre que si las líneas están muy cercas entre ellas, leer el texto se hace dificultoso. Generalmente utilizar entre un 130% y un 150% del tamaño de la fuente suele ser una buen lineamiento, por ejemplo: Si la fuente es 28px, entonces 1.3 de 28px es aprox. 37px.

<img width="1150" alt="image" src="https://user-images.githubusercontent.com/21185543/120891955-e7ab2a80-c5e1-11eb-8fc7-15688724a6d6.png">

En CSS la propiedad que utilizamos es **line-height**.
```css 
line-height: normal;
line-height: 1.3;
line-height: 140%;
line-height: 150%;
```

## Font Weights
Generalmente las fuentes vienen en con diferentes estilos de negritas. La mayoría de las fuentes modernas traen cinco variantes:

<img width="284" alt="image" src="https://user-images.githubusercontent.com/21185543/120892217-913eeb80-c5e3-11eb-9b8a-7c20ea03e9af.png">

La propiedad *font-weight* de CSS especifica el peso o grueso de la letra. Algunos tipos de letra sólo están disponibles en normal y bold.

```css
font-weight: normal;
font-weight: bold;

/* Relativo al padre */
font-weight: lighter;
font-weight: bolder;

font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400;
font-weight: 500;
font-weight: 600;
font-weight: 700;
font-weight: 800;
font-weight: 900;
```

## Google Fonts
Google Fonts facilita aportar personalidad y rendimiento a nuestros sitios web. Con un sólido catálogo de fuentes de código abierto permite la integración de tipos de letra e iconos expresivos. 

> **PROTIP 1**: Siempre es una buena idea utilizar fuentes populares por dos razones, la primera es que el usuario seguramente ya está familiarizado con la fuente (lo que mejora su experiencia) y segundo, va a cargar más rápido nuestros sitios web si las fuentes ya están descargadas en su computadora.

> **PROTIP 2**: A la hora de elegir las fuentes para nuestro diseño, lo recomendable es que sean 2 o un máximo de 3. Una para los encabezados y otra para el texto (siempre sans-serif).

### Roboto 
https://fonts.google.com/specimen/Roboto

Html:
```html
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"> 
```

CSS:
```css
font-family: 'Roboto', sans-serif;
```

## Unidad em

La unidad "**em**" es una unidad tipográfica adoptada en CSS. Permite establecer el tamaño de la fuente de un elemento en relación con el tamaño de la fuente de su padre.

Por ejemplo, para **1.5** em, el hijo tendría un font-size de **27px** (1.5 * 18px = 27px).

Si no se especifica el tamaño de la fuente del elemento raíz - **html** - se utilizará el valor predeterminado del navegador, igual a 16px.

La unidad correspondiente al directorio raíz es "**rem**" y es la más utilizada en diseño web, ya que adapta las fuentes en proporción a la configurada en el browser.

 ```css
html {
  font-size: 16px;
}

.ems {
  font-size: 1.3em;
}

.rems {
  font-size: 1.3rem;
}
 ```

## Links útiles:

- Google Fonts: https://fonts.google.com/
- API Google Fonts: https://developers.google.com/fonts/docs/css2
- Adobe Fonts: https://fonts.adobe.com/
