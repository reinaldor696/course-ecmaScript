//actualizacion javascript junio 2017

//el metodo entries devuelve una matriz de pares propio de la propiedad enumerable
//Object.entrien transforma el objeto en un array viendo la estructura que se tiene
//trnasformo los elementos en un array donde cada uno de estos elementos es la representacion de cada uno de los elementos

//NOTA:es importante porque cuando manipulamos objectos y arreglos debemos hacer algunas transformaciones de la informacion
const countries = {MX: 'Mexico', CO: 'Colombia', CL: 'Chile', PE: 'Peru'};
console.log(Object.entries(countries));