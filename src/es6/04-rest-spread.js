//actualizacion javascript junio 2015

//arrays destructuring

//this is the way for destructuring an array, this implementation was aplicated in the update
let fruits = ['Apple', 'Bananas'];
let [a, b] = fruits;
console.log(a, b);

//object destructuring

let user = {
    username: 'Reinaldo',
    age: 29
};

let {username, age} = user;

console.log(username, age);

//spread operator = operador de propagacion

//the spread operator (...) it's used for add a new information to an object
// spread operator brings all it have into an object
let person = {
    name: 'Reinaldo',
    age: 29,
};

let country = 'US';

let data = {id: 1, ...person, country};

console.log(data);

//rest paramers

//(...values) agarra todo los parametros que le enviamos y los agrega a este elemento de value
//NOTA:es recomendable solo asignar menos de 4 valores por que el codigo no puede recibir tantos parametros ya que puede causar mucha confusion
function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
};

sum(1, 1, 2, 3);