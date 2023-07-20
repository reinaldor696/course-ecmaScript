//actualizacion javascript junio 2018

//spread

//admite el uso de spread y regex con objetos, podemos utilizar el operador de (...) y copiar lo que esta en las claves en nuestros objetos.

//es la manera de separar o sacar  un elemento dentro de un objeto utilizando el operador de propagacion, para mandar todo en este caso a value
const user = {username: 'gndx', age: 34, country: 'CO'};
const {username, ...values} = user;
console.log(username);
console.log(values);