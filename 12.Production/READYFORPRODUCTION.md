# Ready for production!

## Encontra un dominio

1. Busca un dominio que esté disponible en https://domains.google.com/registrar. A continuación, escoge el que quieres adquirir.

2. Haz clic en Añadir al carrito.

3. Para consultar el carrito, haz clic en Ver carrito. Si quieres quitar un dominio, haz clic en el icono de la papelera Eliminar que aparece junto al nombre.

4. En algunos dominios (por ejemplo, .us y .ca) tendrás que proporcionar más información. Para ello, haz clic en Introducir información. 

5. Selecciona una opción de privacidad. 

6. Google Domains activa de forma predeterminada la renovación automática, pero puedes desactivarla si lo prefieres.

7. En la parte inferior del carrito, haz clic en Pagar.

8. Introduce o edita la información de contacto del dominio.  

9. Selecciona tu método de pago. 

10. Haz clic en Comprar. El registro puede tardar unos minutos en procesarse.

## Publica en cloud

### App Engine

Una aplicación de App Engine consta de un solo **recurso de aplicación** que consiste en uno o más servicios. Cada **servicio** se puede configurar para utilizar entornos de ejecución diferentes y operar con una configuración distinta.

Cuando creas un recurso de aplicación, la app de App Engine se crea en el proyecto de Google Cloud. La aplicación de App Engine es un contenedor de nivel superior que incluye el servicio, la versión y los recursos de instancias que componen la app.

### Entorno de ejecución de Go

Go es el lenguaje de programación del lado de servidor, el cual va a servir nuestra web. El entorno de ejecución de Go es responsable de instalar el código de nuestra web y sus dependencias, además de ejecutar tu servicio. El entorno de ejecución de Go para App Engine en el entorno estándar se declara en el archivo **app.yaml**.

![image](https://user-images.githubusercontent.com/21185543/122827381-a6419d00-d2ba-11eb-8890-739f18e727ea.png)

### Pasos para publicar nuestra web

1. Crea una cuenta en Google Cloud (gratis): [Google Cloud](https://console.cloud.google.com/freetrial?_ga=2.260530571.76668666.1624307808-464403128.1622486337&_gac=1.48691540.1622486337.Cj0KCQjwktKFBhCkARIsAJeDT0iNwE0NmwTkcYyoJz26y7ktS2Bp_Deiv2_rShapHbrMklWyQjNDYfAaAnP_EALw_wcB)

2. Habilita las Cloud Build API: [Habilitar API](https://console.cloud.google.com/flows/enableapi?apiid=cloudbuild.googleapis.com&_ga=2.64390825.76668666.1624307808-464403128.1622486337&_gac=1.187676890.1622486337.Cj0KCQjwktKFBhCkARIsAJeDT0iNwE0NmwTkcYyoJz26y7ktS2Bp_Deiv2_rShapHbrMklWyQjNDYfAaAnP_EALw_wcB)

3. Descarga e instala python versión **2.7+**: https://www.python.org/downloads/

4. Instala App Engine SDK (software development kit): [Instrucciones para instalar SDK](https://cloud.google.com/sdk/docs/install)

5. Ir a la consola de Google Cloud: https://console.cloud.google.com/

6. Selecciona "Create project".

7. Ingresa nombre de proyecto, copiar **ID** y selecciona "Create".

8. Inicializa tu app de App Engine con el proyecto:

```sh
$ gcloud app create --project=[YOUR_PROJECT_ID]
```

9. Cuando se te solicite la región, selecciona **southamerica-east1**.

10. Ejecuta el siguiente comando a fin de instalar el componente de gcloud, que incluye la extensión de App Engine para Go 1.12+:

```sh
$ gcloud components install app-engine-go
```

11. Crea un archivo **app.yaml** con las opciones de configuración del servicio.

```yaml
application: [YOUR_PROJECT_ID]
version: 1
runtime: go
api_version: go1

handlers:
- url: /.*
  script: _go_app
```

12. Crea un archivo **main.go** con el código de la aplicación

```go
 package main

import (
	"net/http"
)

func init() {
	http.Handle("/", http.FileServer(http.Dir(".")))
}
```

13. El directorio raíz de tu proyecto debería quedar así:
```sh
.
├── img/
├── css/
├── app.yaml
├── index.html
└── main.go
```

14. En el directorio raíz en el que se encuentra el archivo **app.yaml**, implementa el servicio web en App Engine mediante el siguiente comando:
```sh
$ gcloud app deploy
```

15. Para iniciar el navegador y ver el servicio web en https://PROJECT_ID.REGION_ID.r.appspot.com, ejecuta el siguiente comando: 
```sh
$ gcloud app browse
```

¡Felicitaciones!. ¡Acabas de implementar y crear un servicio en App Engine!

## Apunta tu dominio

1. Ir a Google Domains selecciona "Mis dominios".

2. Selecciona tu dominio y luego "Configurar DNS".

3. Ir a la seccion de "App Engine".

4. Edita la configuración y agrega la url de tu App Engine (https://PROJECT_ID.REGION_ID.r.appspot.com).

5. Selecciona "Guardar".

¡Felicitaciones tu web ya está publicada!

## Links útiles:
- Google domains: https://domains.google/
- Generador de nombres: https://namelix.com/
- App Engine + Go Tutorial: https://cloud.google.com/appengine/docs/standard/go/quickstart
- Go examples: https://github.com/GoogleCloudPlatform/golang-samples
