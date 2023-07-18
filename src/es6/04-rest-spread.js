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