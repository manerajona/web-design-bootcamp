# Fontawesome
Font Awesome es un framework de **iconos vectoriales y estilos css**. Este framework es utilizado para sustituir imágenes de iconos comunes por gráficos vectoriales convertidos en fuentes. Para ello utiliza una librería de mas de 400 iconos transformadas en fuentes.

## Ventajas

### Más de 400 iconos

En la versión actual existen más de 400 iconos disponibles, pero esto va en aumento y es actualizado con nuevos iconos permanentemente.

### No se necesita del uso de javascript

Compatible con la mayoría de dispositivos y navegadores ya que no requiere de Javascript ni otras librerías para su uso, solo el soporte de **font-face** por parte de los navegadores.

### Escalabilidad

Al tratarse de iconos vectoriales nos permite escalar nuestros iconos sin problemas de resolución.

### Licencia libre

Font Awesome es totalmente libre para uso comercial

### Control CSS

Fácil estilos gráficos de los iconos mediante estilos css:  color, size, shadow, y otras propiedades, todo desde css.

## Desventajas

Las fuentes de iconos, como fontawesome e Iconic, pueden ralentizar nuestras páginas considerablemente. Las fuentes de iconos pueden bloquear el renderizado de la página, causar cambios en el diseño y muchos otros problemas.

Los iconos se descargan todos juntos en la pc del cliente y esta descarga suele llevar tiempo, más utilizando un pack de datos. Además, las fuentes web también utilizan un archivo CSS para "mapear" los iconos. El comportamiento por defecto del archivo CSS es bloquear la carga de la página, lo que puede resultar en una mala experiencia de usuario.

## Custom Fontawesome Icons

Con el fin de solucionar los problemas de performance en fontawesome lo que vamos a hacer es "customizar" la librería para extraer sus iconos y poder utilizarlos en nuestra web. Para ello vamos a utilizar un editor de gráficos vectoriales como **Inkscape**.

### Install
1. Download: https://fontawesome.com/start
3. Install fonts: https://eloutput.com/tutoriales/paso-a-paso/instalar-desinstalar-tipografias-windows-mac/

> NOTA: Las fuentes están en la carpeta fontawesome-free-X.XX.X-web/webfonts

### Edit
1. Abri **Inkscape**, en la barra de herramientas de la parte superior, selecciona la **align & distribute**, así como **xml-editor**.

![image](https://user-images.githubusercontent.com/21185543/121961315-aa5f3f00-cd3d-11eb-9711-5fa329d1fdb3.png)

2. En la barra de herramientas, abri **document properties** y en la sección de tamaño personalizado establece las unidades en px, luego cambia tanto la altura como el ancho a 100px.

![image](https://user-images.githubusercontent.com/21185543/121961456-d5e22980-cd3d-11eb-969c-1125cf35eac3.png)

3. Selecciona **view>zoom>page**. A continuación, pulsa el signo menos (-) 3 veces en el teclado. Esto hará que la vista del documento tenga un tamaño adecuado.
Ir a **view>page grid** (o simplemente pulsa # en tu teclado)

![image](https://user-images.githubusercontent.com/21185543/121961716-26f21d80-cd3e-11eb-95a4-fc3677a1eaff.png)
![image](https://user-images.githubusercontent.com/21185543/121961767-36716680-cd3e-11eb-996e-f65bf307b9c8.png)

4. Ir a la tabla de iconos de font-awesome y copia un icono (https://fontawesome.com/v5.15/icons).
En la barra de herramientas de la izquierda, selecciona la herramienta de texto.
En la barra de herramientas superior, selecciona **font-awesom** como fuente. 
A continuación, pegar el icono copiado en el centro de la página.

![image](https://user-images.githubusercontent.com/21185543/121961931-6ae52280-cd3e-11eb-95ce-f989ced42489.png)
![image](https://user-images.githubusercontent.com/21185543/121961960-77697b00-cd3e-11eb-9a06-f388f5f764a9.png)

5. Elijir la herramienta de selección y hace clic en su icono.
En el menú, selecciona **edit > select all in all layers**.
En el menú, selecciona **path > Object to Path**. 
En el menú, selecciona **path > Union**.

![image](https://user-images.githubusercontent.com/21185543/121962185-c9120580-cd3e-11eb-8993-ca4efa324a85.png)
![image](https://user-images.githubusercontent.com/21185543/121962220-d4fdc780-cd3e-11eb-9090-41a449c0b8b6.png)
![image](https://user-images.githubusercontent.com/21185543/121962249-e1822000-cd3e-11eb-87bc-fc0e56497433.png)

6. En la barra lateral del Editor XML, hacer clic y arrastrar tu ```<svg:path id="path----">``` para que esté justo encima de la etiqueta con la "layer 1". Asegúrate de que está en el mismo nivel de esquema que la etiqueta "layer 1".
Después de move la etiqueta "path", elimina la etiqueta "layer 1".
Notaras que el icono ha desaparecido.  No pasa nada.  Lo recuperaremos en el siguiente paso.

![image](https://user-images.githubusercontent.com/21185543/121963097-088d2180-cd40-11eb-990f-c04502463297.png)
![image](https://user-images.githubusercontent.com/21185543/121963132-1347b680-cd40-11eb-8431-ea8023c099f4.png)

7. Selecciona **edit > select all**.
En la barra lateral de **Align & Distribute**, a la derecha, elijir "centrar en vertical" y "centrar en horizontal" como se resalta a continuación

![image](https://user-images.githubusercontent.com/21185543/121963580-b1d41780-cd40-11eb-8918-0f1e86776865.png)

Ahora el icono debería estar de nuevo en su sitio.
En la barra de herramientas, bloquea la altura y la anchura haciendo clic en el icono de bloqueo (Asegúrate de que tus unidades están configuradas en px).
Cualquiera que sea el número mayor entre **Height “H”** o **Width “W”** en la barra de herramientas. Ajusta ese número a **80px**. Si los números son iguales, no importa cuál elijas para editar. El otro número cambiará en proporción ya que lo tienes bloqueado.
En el siguiente paso vamos a realinear el icono.

![image](https://user-images.githubusercontent.com/21185543/121963837-08d9ec80-cd41-11eb-9c4c-711adfbd07ac.png)

8. Después de cambiar el tamaño, el icono estará descentrado
En la barra lateral de **Align & Distribute**, seleccione "centrar en vertical" y "centrar en horizontal" como se resalta a continuación.

![image](https://user-images.githubusercontent.com/21185543/121963580-b1d41780-cd40-11eb-8918-0f1e86776865.png)

### Export

El icono svg está ahora completo y listo para guardar
Seleccione **File > Save as**. En la sección Guardar como, selecciona, **optimized svg**. Hacer clic en **Save**.

![image](https://user-images.githubusercontent.com/21185543/121964502-07f58a80-cd42-11eb-9dc6-49c8ec08eb53.png)

Aparecerá un cuadro de diálogo con muchas opciones.
En las pestañas "Options" e "Id", selecciona las opciones:

![image](https://user-images.githubusercontent.com/21185543/121964621-307d8480-cd42-11eb-96ee-a802f426b888.png)

Click “OK”


### Use
Agregar a los recursos de tu página y abrí el icono con el editor de código o IDE.

![image](https://user-images.githubusercontent.com/21185543/121964923-9f5add80-cd42-11eb-9224-3a6df9445922.png)

Tu viewbox debería ser: **viewbox="0 0 100 100"**. Si eso no sucede, simplemente setealo en 100.  
La siguiente foto es cómo tu svg debería verse después borrar los tags innecesarios. Ahora está listo para ser utilizado.

![image](https://user-images.githubusercontent.com/21185543/121964984-bdc0d900-cd42-11eb-9cea-e577e906c89f.png)


## Links útiles:
 
- Tutorial: https://www.sarasoueidan.com/blog/icon-fonts-to-svg/
- Fontawesome Download: https://fontawesome.com/start
- Fontawesome Icons (v5): https://fontawesome.com/v5.15/icons
- Fontawesome Icons (v6): https://fontawesome.com/v6.0/icons
- Google Icons: https://fonts.google.com/icons?selected=Material+Icons
- Simple Icons: https://simpleicons.org/
- Inkscape Download: https://inkscape.org/release/inkscape-1.1/
