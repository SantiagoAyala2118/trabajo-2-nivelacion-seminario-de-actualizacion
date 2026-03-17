//? Modulo para poder interactuar con la consola
import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

// Creamos la interfaz
const rl = readline.createInterface({ input, output });

//* Funcion asincrona para que JS espere a que el usuario meta algo por consola antes de continuar ejecutandose
async function iniciarSistema() {
  let cantidad_alumnos = parseInt(
    await rl.question(
      "Ingrese la cantidad de alumnos de los que desea evaluar sus notas: ",
    ),
  );

  let i = 0;
  let terminado = "no";
  let lista_de_alumnos = [];

  if (cantidad_alumnos > 0) {
    while (i !== cantidad_alumnos && terminado !== "si") {
      console.log("\n--- Nuevo Alumno ---");
      let nombre = await rl.question("Ingrese el nombre del alumno: ");

      let edad = parseInt(await rl.question("Ingrese la edad del alumno: "));

      let nota = parseFloat(await rl.question("Ingrese la nota del alumno: "));

      lista_de_alumnos.push([nombre, edad, nota]);
      i++;

      if (i === cantidad_alumnos) {
        let respuesta = await rl.question("¿Ha terminado? Si - No: ");
        terminado = respuesta.toLowerCase();

        if (terminado === "no") {
          cantidad_alumnos++;
        }
      }
    }
  } else {
    console.log("Gracias por usar el sistema. Nos vemos en otro momento");
    rl.close(); //? Cerramos la lectura de consola
    return; //? Cortamos la ejecución
  }

  // --- SALIDAS ---

  console.log("\nLos alumnos ingresados fueron:");

  lista_de_alumnos.forEach((a, index) => {
    console.log(`${index}_ ${a[0]}`);
  });

  // En JS se restan los valores para que el .sort() sepa quién va primero
  lista_de_alumnos.sort((a, b) => b[2] - a[2]);

  console.log("\nLas notas ordenadas de mayor a menor son:");
  lista_de_alumnos.forEach((a) => {
    console.log(`Alumno: ${a[0]} - Nota: ${a[2]}`);
  });

  // Sacamos el promedio acumulando los valores
  let suma_notas = 0;
  lista_de_alumnos.forEach((a) => {
    suma_notas += a[2];
  });

  let promedio = suma_notas / lista_de_alumnos.length;

  console.log(`\nEl promedio general de notas es: ${promedio.toFixed(2)}`);

  //? Se utiliza el metodo .close() para finalizar la ejecucion
  rl.close();
}

//* Ejecutamos la función
iniciarSistema();
