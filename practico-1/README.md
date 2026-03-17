# Trabajo Práctico: Interfaz Dinámica con JavaScript

Este proyecto es una aplicación web simple que permite a los usuarios ingresar texto en un campo de entrada (input) y alternar entre diferentes temas de colores para la interfaz utilizando un botón.

El proyecto está diseñado para ejecutarse en tres modalidades diferentes: de forma local sin servidor y mediante un servidor nativo de Node.js.

---

## ¿Cómo funciona?

La lógica principal del proyecto se encuentra en el archivo `index.html`, utilizando **HTML y JavaScript puro (Vanilla JS)**.

1. **Captura de Texto:** Se utiliza un _Event Listener_ en la caja de texto que escucha el evento `keypress`. Cuando detecta que el usuario presionó la tecla `Enter`, captura el valor (`value`) del input y lo muestra en pantalla mediante una ventana emergente (`alert`).
2. **Cambio de Temas (Colores):** Los temas de colores están definidos en un arreglo (array) de objetos dentro de JavaScript. Al hacer clic en el botón "Cambiar colores", el sistema incrementa un contador de estado. Utilizando el operador matemático módulo (`%`), el contador vuelve a cero automáticamente al llegar al final del arreglo, creando un ciclo infinito entre los tres estados definidos (Blanco/Negro, Negro/Blanco, Celeste/Rojo). Luego, se aplican estos estilos directamente al DOM (Body, Input y Botón).

---

## Instrucciones de Ejecución

El proyecto incluye el código fuente completo y puede ejecutarse de tres formas distintas según los requisitos.

### Modalidad 1: JavaScript Puro (Sin servidor web)

Esta es la versión estática que no requiere levantar ningún entorno de servidor.

1. Navegá hasta la carpeta del proyecto en tu computadora.
2. Hacé doble clic sobre el archivo `index.html`.
3. El archivo se abrirá automáticamente en tu navegador web predeterminado (utilizando el protocolo `file://`).

### Modalidad 2: Servidor Web con Node.js

Esta versión levanta la página utilizando el módulo `http` nativo de Node.js, sin dependencias externas.

1. Abrí una terminal o consola de comandos en la carpeta del proyecto.
2. Ejecutá el siguiente comando para iniciar el servidor:
   ```bash
   node servidor.js
   ```
