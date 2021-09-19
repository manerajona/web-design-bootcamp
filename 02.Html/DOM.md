# Document Object Model

El DOM es *"una interfaz de programación de aplicaciones (API) para documentos HTML"*. Es decir es la base o programa base sobre la que se construyen los documentos de HTML. 

Todos los navegadores y otras aplicaciones que quieran mostrar documentos html deben tener este programa base o interfaz.

## Estructura

En el DOM los objetos tienen una estructura parecida a un árbol, creando una estructura jerárquica en la que de un elemento - **element** - puede tener varios hijos (childs), un padre (parent) y hermanos (siblings). Todo el árbol del DOM depende de un nodo principal a partir del cual se generan todos los demás, llamado nodo **Document**.

Por ejemplo si tenemos una página web sencilla:
```html
<html>
<head>
  <title>My title</title>
</head>
<body>
  <h1>My header</h1>
  <a href="www.example.com">My link</a>
</body>
</html>
````

En el DOM se representa como una estructura de arbol de la siguiente manera:
![image](https://user-images.githubusercontent.com/21185543/120903170-fd891180-c61a-11eb-8cb1-63501ae1e829.png)

