# Programming 101

## Desarrollo Web
HTML, CSS y JavaScript son los tres lenguajes básicos para crear aplicaciones web.

![trio](https://user-images.githubusercontent.com/21185543/120114601-45f58a80-c156-11eb-9e92-a1e91107e6db.png)

- **HTML** (Hypertext Markup Language): es el lenguaje que estructura la información o el contenido del documento, el formato de los archivos es **.html**.

- **CSS** (cascading style sheets): es el lenguaje que especifica el diseño del documento y todo lo relacionado con la parte visual, el formato de los archivos es **.css**.

- **JavaScript**: es el lenguaje que hace que todo sea interactivo (es realmente el lenguaje de programación), el formato de los archivos es **.js**.

## HTTP

HTTP o "Hypertext Transfer Protocol" es el nombre del protocolo que nos permite realizar una petición de recursos (REQUEST) desde nuestra PC a un servidor web y hace posible que dichos recursos puedan ser enviados por medio de una respuesta (RESPONSE). Este tipo de protocolos se denominan de arquitectura cliente/servidor.

![http](https://user-images.githubusercontent.com/21185543/120107069-dec7de00-c135-11eb-821c-b22f0851e8dc.png)

### Request/Response pattern
- **Header**: Metadata sobre el mensaje (ejemplo: Content-Type, Server, Date, Host, Origin).
- **Body**: Es el cuerpo del mensaje o también conocido como "payload", generamente en formato xml, json o texto plano.
- **Status code**: Es un código numérico que indica en que estado se procesó la petición.

### HTTP status codes

|Rango  |Significado|
|-------|-------|
|100-199|información genérica|
|200-299|Request exitoso (200: ok, 201: created, 204: accepted)|
|300-399|Redirecciones (301: moved permanently)|
|400-499|Error de lado del cliente (400: bad request, 401: non authorized, 404: not found)|
|500-599|Error de lado del server (500: internal server error, 503: service unavailable)|

## API
API significa **Interfaz de Programación de Aplicaciones**.

Las API permiten que sus productos y servicios se comuniquen con otros, sin necesidad de saber cómo están implementados. Esto simplifica el desarrollo de las aplicaciones y permite ahorrar tiempo y dinero.

A veces, las APIs se consideran como contratos que representa un acuerdo entre las partes: si una de las partes envía una solicitud (request) con cierta estructura en particular, esa misma estructura determinará cómo responderá el software de la otra parte (response).

El término API se utiliza indistintamente para referirse a:
- Una colección de interfaces a ser utilizadas por el desarrollador, sin necesidad de que éste conozca su funcionamiento interno.
- La documentación necesaria que el desarrollador pueda implementar dichas interfaces.

![image](https://user-images.githubusercontent.com/21185543/120893851-b3d50280-c5eb-11eb-94e9-d7269ca8e590.png)


## LINUX

Linux es un sistema operativo de código abierto. Cuando hablamos de código abierto nos referimos a un tipo de software que nos permite ver cuál es su código y da la oportunidad al usuario de modificarlo en su favor. Linux es el sistema operativo más utilizado en el lado del servidor.

![linux](https://user-images.githubusercontent.com/21185543/120107957-6a8f3980-c139-11eb-8f6e-66ccb7c3b37e.png)

### Terminal de Linux
La terminal de Linux se basa en un lenguaje de scripting conocido como Bash. Es la interfáz de usuario que ofrecen generalmente los servidores para poder ejecutar comandos, ejecutar archivos binarios y automatizar tareas.

Información acerca del sistema operativo:
```sh
$ echo $SHELL   # shell location
$ uname -a      # Kernel information
$ hostname      # Name of the computer
$ hostname -I   # IP of the computer
```
Usuarios:
```sh
$ who     # who users are logged in the OS
$ w       # who users are logged in the OS
$ whoami  # who is my user
$ tty     # user's terminal type
```
Shell:
```sh
$ clear       # clear screen, also Ctrl + l
$ history     # show command history
$ !           # Run last command
$ ! <line>    # Run command from history by line number
$ bash        # start a new shell bash
$ exit        # exit shell bash, also Ctrl + d
```
Imprimir y concatenar:
```sh
$ echo <output>   # print something in shell bash
$ cat <file>      # concat the file content
```
Fecha y Hora:
```sh
$ date              # print current date
$ date +"%T"        # print current time
$ date +"%D"        # print current date in dd/MM/yyyy
$ date +"%F"        # print current date in yyyy-MM-dd
$ cal               # print a calendar
```
Directorios:
```sh
$ cd ./<path>       # change directory to path from current location
$ cd <path>         # change directory to path from current location
$ cd /              # change directory to root
$ cd /<path>        # change directory to path from root (absolute path)
$ cd ~              # change directory to home directory
$ cd                # change directory to home directory
$ cd ..             # change directory to parent directory
$ pwd               # print working directory (absolute path)
$ ls                # list current directory content
$ ls -la            # list current directory content with details and hidden files
$ mkdir <folder>    # create (make) directory
$ rmdir <folder>    # remove empty directory
$ rm -rf <folder>   # remove directory and its content
```
Archivos:
```sh
$ file <file>       # print details of file
$ touch <file>      # create file
$ vi <file>         # edit file with Vim editor
$ nano <file>       # edit file with Nano editor
$ rm <file>         # remove file
$ cp <file> <path>  # copy file to path directory
$ mv <file> <path>  # move file to path directory
```
Ejecutar archivo .sh:
```sh
$ sh file.sh      # run file
$ ./file.sh       # run file
$ time file.sh    # run with time of execution
```
Información acerca de Software instalado:
```sh
$ which <cmd>   # which command is installed
$ man <cmd>     # command manual
```

## GIT
Git es el software más popular para el versionamiento de código fuente. Es utilizado para comparar el código entre versiones, restaurar versiones antiguas y fusionar los cambios de distintas versiones. Esto nos permite trabajar en colaboración con otros desarrolladores en un mismo proyecto.

![git](https://user-images.githubusercontent.com/21185543/120113912-13965e00-c153-11eb-8b7f-c672c30e0022.png)

Clone repo:
```sh
$ git clone git@github.com:user/reponame.git
```

Estado del repo local:
```sh
$ git status
```

Agregar cambios:
```sh
$ git add --all
$ git add .
```

Commit & Push:
```sh
$ git commit -m "message"
$ git push
```

Traer útimos commits:
```sh
$ git fetch --all
$ git pull
```

Historial de commits:
```sh
$ git log
$ git log --oneline
```

Settear username para un sólo repo:
```sh
$ git config user.email "manerajona@gmail.com"
$ git config user.name "Jonathan Manera"

$ git config user.email
$ git config user.name
```

Setttear username global:
```sh
$ git config --global user.email "manerajona@gmail.com"
$ git config --global user.name "Jonathan Manera"

$ git config --global user.email
$ git config --global user.name
```

## FUN FACT
El creador de Linux es el mismo creador de Git, su nombre es Linus Torvalds y es un ingeniero de software finlandés. Además, es un miembro activo de la comunidad de GitHub: https://github.com/torvalds.

![image](https://user-images.githubusercontent.com/21185543/120120690-51a47980-c175-11eb-8c78-01b2aa51c269.png)


