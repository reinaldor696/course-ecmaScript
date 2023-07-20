//actualizacion javascript junio 2019

//flat
//nos devuelve una matriz de cualquier submatriz
//nota:debemos entender que las matricez son concepto de arreglos
//un arreglo anidado dentro de otro arreglo y asi tenemos una matriz

const array = [1,1,2,3,4, [1,2,3,5, [1,2,4]]];
//utilizamos array y le colocamos el metodo flat y dentro la profundidad del array
console.log(array.flat(3));


//flat map
// el metodo flap map es el primero que mapea cada uno de los elementos usados basados en una funcion de mapeo y luego aplana el resultado


const array2 = [1,2,3,4,5];

//flatMap() va a tener una logica interna en el que utilizamos el concepto de arrow function
//la v es una variable
console.log(array2.flatMap(v => [v, v * 2]));