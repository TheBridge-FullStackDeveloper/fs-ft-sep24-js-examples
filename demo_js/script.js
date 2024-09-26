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
contarImpares(12,50); //12...12+50

console.log("*****Ejecución 2*****");
contarImpares(2,30); //2...2+30
