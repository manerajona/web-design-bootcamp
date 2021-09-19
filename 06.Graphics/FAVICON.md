# Favicon

Los favicons fueron introducidos en 1999 por Internet Explorer 5 y estandarizados por el W3C unos meses después. Son un pequeño gráfico que representa a un sitio web. Para soportar distintos dispositivos se necesitan iconos por cada uno de ellos, se puede optar por distintos formatos y tamaños con el fin de otorgar mayor profesionalismo a nuestros diseños.

![image](https://user-images.githubusercontent.com/21185543/122693225-54900880-d20f-11eb-8e06-56eb7e25b56d.png)

## ICO
favicon.ico fue un formato concebido por Microsoft y que los demás navegadores adoptaron. Microsoft recomienda gráficos en 16×16, 32×32 y 48×48, en donde un solo archivo ICO puede contener varios gráficos.

Aunque todos los navegadores soportan favicon.ico, este archivo está prácticamente obsoleto. Se trata de un formato antiguo y no se utiliza en diseños modernos, mientras que PNG es mucho más consistente entre las distintas plataformas.

## PNG

|Size|Name|Purpose|
|---|---|---|
|32x32   |favicon-32.png  |Certain old but not too old Chrome versions mishandle ico
|57x57   |favicon-57.png  |Standard iOS home screen (iPod Touch, iPhone first generation to 3G)
|76x76   |favicon-76.png  |iPad home screen icon
|96x96   |favicon-96.png  |GoogleTV icon
|120x120 |favicon-120.png |iPhone retina touch icon (Change for iOS 7: up from 114x114)
|128x128 |favicon-128.png |Chrome Web Store icon
|128x128 |smalltile.png	|Small Windows 8 Star Screen Icon
|144x144 |favicon-144.png |IE10 Metro tile for pinned site
|152x152 |favicon-152.png |iPad retina touch icon (Change for iOS 7: up from 144x144)
|180x180 |favicon-180.png |iPhone 6 plus
|180x180 |favicon-180.png |General use iOS/Android icon, auto-downscaled by devices.
|195x195 |favicon-195.png |Opera Speed Dial icon (Not working in Opera 15 and later)
|196x196 |favicon-196.png |Chrome for Android home screen icon
|228x228 |favicon-228.png |Opera Coast icon
|270x270 |mediumtile.png	|Medium Windows 8 Start Screen Icon
|558x270 |widetile.png	|Wide Windows 8 Start Screen Icon
|558x558 |largetile.png	|Large Windows 8 Start Screen Icon

## SVG

Las pestañas en Safari 9+ utilizan iconos vectoriales en SVG para favicon en lugar de formatos como PNG e ICO. El vector artwork en el archivo SVG debe ser sólo negro (sin tonos de negro u otros colores) con un fondo transparente. Además, debe definirse un color de relleno en la etiqueta ```<link>``` con un valor hexadecimal o una abreviatura de color. Este es el código para añadir el icono:

```html 
<link rel='mask-icon' href='icon.svg' color='#ff0000'> 
```

## Crear favicon

### 1. Crea nuevo documento en Inkscape o Illustrator.
  - **Name**: fav-base
  - **Width**: 1000px
  - **Height**: 1000px
  - **Color Mode**: RGB
  - **Raster effect**: 300ppi (High resolution)

### 2. Pegar nuestro logo, ícono o imagen vectorial (svg).
  - Agrandar la imagen en forma proporcional.
  - Centrarla en el eje de las x y en el eje de las y.
  - Colorealrlo si es necesario.

### 3. Guardarlo y exportarlo.
  - Ir a **file > save** y guardarlo como **.ai**.
  - Ir a **file > export > export for screens** y guardarlo como **.png** (con fondo transparente).

### 4. Generar favicon.
  - Ir a https://realfavicongenerator.net/ y seleccionar "Select your Favicon picture".
  - Seleccionar el archivo **.png** que generamos en el paso 3.
  - En configuraciones se recomienda agregar un color sólido para mobile y transparente para browsers.
  - En **App name** ingresamos el nombre de nuestra web.
  - En **Favicon Generation Options > Path** eleccionamos **I will place favicon files (...)**.
  - Seleccionar **Generate your Favicon (...)**
  - Seleccionar **Favicon package** para descargar los archivos generados.
  - Extraer el **.zip** que se descargó en una carpeta que vamos a llamar **favicon**, en el directorio raíz de nuestra web.

## 5. Agregar favicons a nuestra web.
  - Copiamos el siguiente bloque de código html.
  ```html
  <!-- FAVICONS -->
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" href="favicon/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="favicon/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="favicon/manifest.json">
    <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#ff0000">
    <link rel="shortcut icon" href="favicon/favicon.ico">
    <meta name="msapplication-config" content="favicon/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
  ```
  - Lo pegamos en el head - ```<head></head>```.


## Links útiles:

- Favicon info: https://css-tricks.com/favicon-quiz/
- Favicon generator: https://realfavicongenerator.net/
- Cheatsheet: https://github.com/audreyfeldroy/favicon-cheat-sheet
