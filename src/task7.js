const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!
  
// ¿Pueden agregar un solo número a una fila existente?
arr[0].push(10);
console.log("Se agrega el numero diez al primer arreglo: ",arr[0]);

// ¿Pueden agregar una fila completa de números?
const newRow = [30,31,32,33,34,35,36,37,38,39];
arr.push(newRow);
console.log("Se agrega esta fila nueva: ",arr);

// ¿Pueden eliminar un solo número de una fila específica?
arr[1].splice(5,1); // Elimina el número 15 de la segunda fila
console.log("Se elimina el número 15 de la segunda fila:", arr[1]);

// ¿Pueden invertir una de las filas sin afectar a las demás?
arr[1].reverse();
console.log("Se invierte el arreglo 2: ", arr[0], arr[1],  arr[2]);

  
  // Type your code above this line!