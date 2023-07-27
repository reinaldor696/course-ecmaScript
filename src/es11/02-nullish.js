//actualizacion javascript junio 2020

//nullish 
//cuando el valor llega nulo el valorque toma es el valor que es comprobado 

const anotherNumber = 1;
const anotherNumberNull = null;

//el operador "??" nos permite comprobar si el valor llega nulo
const validate = anotherNumber ?? 5;
const validateNull = anotherNumberNull ?? 7;

console.log(validate);
console.log(validateNull);