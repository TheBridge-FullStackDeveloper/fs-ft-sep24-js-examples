function contarImpares(numero, cantidad) {
  // numero....numero+cantidad
  let contador = numero; // valor inicial variable de bucle

  while (contador <= numero + cantidad) {
    if (contador % 2 != 0) {
      console.log(contador);
    }
    contador++; // variable incremento bucle
  }
}
console.log("*****Ejecución 1*****");
contarImpares(12, 50); //12...12+50

console.log("*****Ejecución 2*****");
contarImpares(2, 30); //2...2+30

/* This problem was asked by Google.
Given an array of elements, return the length of the longest subarray where all its elements are distinct.
For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], return 5 as the longest subarray of distinct elements is [5, 1, 3, 2, 4].
 */

//[5, 1, 3, 5, 2, 3, 4, 1]
function returnDistinctElements(list) {
  let result = []; // array de resultado de no repetidos

  for (let i = 0; i < list.length; i++) {
    if (result.indexOf(list[i]) === -1) {
      result.push(list[i]); // añadir a la lista de resultado
    }
  }

  return result.length; // piden la longitud del array como resultado
}
// Llamada a la función
returnDistinctElements([5, 1, 3, 5, 2, 3, 4, 1]);

//[5, 1, 3, 5, 2, 3, 4, 1]
function returnDistinctElements2(list) {
  let result = []; // array de resultado de no repetidos

  for (let i = 0; i < list.length; i++) {
    let found = false; //booleano para ver si se ha encotnrado list[i] en result
    
    for (let j = 0; j < result.length; j++) {
      if (result[j] === list[i]) {
        found = true;
      }
    }
    if (!found) {
      result.push(list[i]); // añadir a la lista de resultado
    }
  }
  return result.length; // piden la longitud del array como resultado
}
// Llamada a la función
returnDistinctElements2([5, 1, 3, 5, 2, 3, 4, 1]);

/* This problem was asked by Netflix.
Given an array of integers, determine whether it contains a Pythagorean triplet. Recall that a Pythogorean triplet (a, b, c) is defined by the equation a^2+ b^2= c^2.

(3,4,5) (5,12,13) (7,24,25) (8,15,17) (9,40,41) (11,60,61) (12,35,37) (13,84,85) (16,63,65) (20,21,29) (28,45,53) (33,56,65) (36,77,85) (39,80,89) (48,55,73) (65,72,97)
 */

function pythagoreanTriplet(a,b,c) {
return a**2+b**2 == c**2;
}

console.log(pythagoreanTriplet(5,12,13));
console.log(pythagoreanTriplet(5,1,2));


