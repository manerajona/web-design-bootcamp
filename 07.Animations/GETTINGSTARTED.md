# Transitions & Animations

El resultado de una transición, o animación, es el mismo: un cambio gradual entre dos (o más) puntos.

Las animaciones son buenas para los cambios que se producen **entre más de dos puntos**. Además, las animaciones te dan más opciones sobre qué cambia.

- **Transitions:** producen cambios entre **dos** puntos.
- **Animations:** producen cambios entre **dos o mas** puntos.

## Transition

Las transiciones son buenas para los cambios que se producen de un punto a otro punto - un punto inicial y un punto final.

Una transición ocurre cuando un elemento cambia de un estado a otro, y el navegador rellena ese cambio de estado con una secuencia de cuadros intermedios. Tiene un estado inicial y otro final.

La mayoría de las veces vemos que las transiciones se utilizan en los estados **hover**, o cuando se añade o elimina información en una página. Los estados hover pueden consistir en un sutil cambio de color, y la información de la página puede pasar de invisible a visible.

**¿Cuándo utilizarlas?**

- Si quieres cambiar un elemento de un estado a otro sin pasos intermedios. Los cambios sencillos suelen poder manejarse con transiciones.

- Para una simple animación de ida y vuelta.

### CSS Properties

- transition-property: all;
- transition-duration: 500ms;
- transition-timing-function: ease-in-out;
- transition-delay: 1s;

#### shorthand notation
- transition: all 500ms ease 1s;

## Animation

Las animaciones son una alternativa más potente que las transiciones. En lugar de depender de un cambio de un estado inicial a un estado final como hacen las **transiciones**, las **animaciones** pueden estar formadas por tantos estados intermedios como quieras, y ofrecen más control sobre cómo se animan los estados.

Las animaciones consiguen esto utilizando conjuntos de fotogramas clave (keyframes). Mientras que una transición puede especificarse con una línea en la clase, una animación funciona haciendo referencia a un conjunto de fotogramas clave que se describen por separado en el CSS.

**¿Cuándo utilizarlos?**

- Si una animación necesita ejecutarse cuando la *página se carga*, o es *más compleja que un simple cambio de estado de A a B*.

- Si quieres tener una animación en la página que se reproduzca después de un cierto *delay*.

- Si quieres la flexibilidad que proporcionan *multiples keyframes*.

### CSS Properties

- animation-name: none
- **animation-duration: 0s**
- animation-iteration-count: 1
- animation-direction: normal
- **animation-timing-function: ease**
- **animation-delay: 0s**
- animation-fill-mode: none
- animation-play-state: running

 **Las propiedades en negrita son propiedades que la transición también utiliza**.

 la transición también tiene: *transition-property: all;*

#### animation-name
---
**default value: none**

La propiedad CSS animation-name especifica una *lista de animaciones* que deben aplicarse al **elemento seleccionado**. 

Cada nombre indica un **@keyframes** que define los valores de la propiedad para la secuencia de animación.

Ejemplos:

```css
/* no animation */
animation-name: none;

/* a single animation */
animation-name: test1;

/* a list of animations */
animation-name: test1, animation4;

/* Global values */
animation-name: initial
animation-name: inherit
animation-name: unset
```
#### @keyframes
---
La regla CSS **@keyframes** permite controlar los pasos intermedios en una secuencia de animación CSS estableciendo **keyframes** (o puntos de paso) a lo largo de la secuencia de animación. 

Para utilizarlos, primero se crea una regla **@keyframes** con un **nombre** y se utiliza asignandole el nombre a la propiedad **animation-name** al elemento que se va a animar, como se muestra a continuación:

```css
body {
    animation-name: myCustomAnima;
}

@keyframes myCustomAnima {
  0% { color: red; }
  100%   { color: gold; }
}
```

Cada **@keyframes** contiene conjuntos de reglas que se componen los porcentajes, a lo largo de la animación, en que se produce el fotograma.

Puedes listar los fotogramas en cualquier orden; **se manejarán en el orden en que sus porcentajes especificados indiquen que deben ocurrir**.

También puede utilizar las palabras clave **"from"** y **"to"**, como se muestra a continuación:

```css
body {
    animation-name: change-color;
}

@keyframes change-color {
  from { color: red; }
  to   { color: gold; }
}
```

#### animation-duration
---
**default value: 0s**

La propiedad animation-duration especifica el tiempo que debe tardar una animación en completar un ciclo.

Ejemplos:

```css
animation-duration: 6s;
animation-duration: 120ms;

/* Multiple animations */
animation-duration: 1s, 15s;
animation-duration: 10s, 30s, 230ms;
```

#### animation-iteration-count
---
**default value: 1**

The animation-iteration-count CSS property defines the number of times an animation cycle should be played before stopping.

```css
animation-iteration-count: infinite;
animation-iteration-count: 3;
animation-iteration-count: 2.3;

/* Multiple animations */
animation-iteration-count: 2, 0, infinite;
```
#### animation-direction
---
**default value: normal**

La propiedad animation-direction indica si la animación debe reproducirse en reversa en ciclos alternos.

Ejemplos:

```css
/* Single animation */
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;

/* Multiple animations */
animation-direction: normal, reverse;
animation-direction: alternate, reverse, normal;

/* Global values */
animation-direction: inherit;
animation-direction: initial;
animation-direction: unset;
```
#### animation-timing-function
---
**default value: ease**

La propiedad animation-timing-function especifica cómo debe progresar una animación CSS durante la duración de cada ciclo.

Ejemplos:

```css
/* Keyword values */
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: linear;
animation-timing-function: step-start;
animation-timing-function: step-end;

/* Multiple animations */
animation-timing-function: ease, step-start;

/* Global values */
animation-timing-function: inherited;
animation-timing-function: initial;
animation-timing-function: unset;
```

#### animation-fill-mode
---
**default value: none**

La propiedad animation-fill-mode especifica cómo una animación CSS debe aplicar estilos a su objetivo antes y después de ejecutarse.

Ejemplos:

```css
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;
```

#### animation-play-state
---
**default value: running**

La propiedad animation-play-state determina si una animación se está ejecutando o está en pausa. 

Puede consultarse para determinar si la animación se está ejecutando o no. 

Además, su valor puede establecerse para pausar y reanudar la reproducción de una animación.

La reanudación de una animación en pausa iniciará la animación desde donde la dejó en el momento en que fue pausada, en lugar de comenzar de nuevo desde el principio de la secuencia de animación.

Ejemplos:

```css
/* Single animation */
animation-play-state: running;
animation-play-state: paused;

/* Multiple animations */
animation-play-state: paused, running, running;

/* Global values */
animation-play-state: inherited;
animation-play-state: initial;
animation-play-state: unset;
```

#### animation-delay
---
**default value: 0s**

La propiedad animation-delay especifica cuándo debe comenzar la animación. Esto permite que la secuencia de animación comience algún tiempo después de ser aplicada a un elemento.

Ejemplos:

```css
animation-delay: 3s;
animation-delay: 2s, 4ms;
```

## Links útiles:

- Can I use transition: http://caniuse.com/#search=transition
- Can I use animation: http://caniuse.com/#search=animation
