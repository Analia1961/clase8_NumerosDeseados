// Arreglos (Ejercicios ONLINE) Viernes 13 de mayo de 2022
// Ejercicio 3 - Números Deseados

/* • Construya un algoritmo que tenga un arreglo de 
dimensión 5 y llénelo con los números que el usuario desee.
• Muestre los números del arreglo al usuario. */

//EJERCICIO PEDIR NUMEROS AL USUARIO

let numeroDeseadoArreglo: number[] = new Array(5);

let nro: number;
let indice: number;

for (indice = 0; indice < 5; indice++) {
  nro = Number(
    prompt("Ingrese el número que desea poner en la posición ", indice)
  );
  numeroDeseadoArreglo[indice] = nro;
}

for (indice = 0; indice < 5; indice++) {
  console.log(
    "El número en la posición " + indice + " es " + numeroDeseadoArreglo[indice]
  );
}
