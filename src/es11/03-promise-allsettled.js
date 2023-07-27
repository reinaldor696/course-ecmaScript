//actualizacion javascript junio 2020

//promise allSettled
//con esto tenemos el punto de que si todo ha sido resuelto en este caso sera la logica del ejemplo

const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2"));

//promise.allSettled es el metodo que en este caso vamos a utilizar, y en un array le pasamos las promesas 
Promise.allSettled([promise1, promise2, promise3])
 //le agregamos el then como toda promesa, y tenemos un response nuestra funcion anonima directa
 .then(response => console.log(response));

//nos regresa un array donde tenemos cada uno de los elementos que esta pasando
// vemos el estatus que en el primer caso fue rejected y nos da el reason
//en los otros dos casos fue fulfilled y nos da el valor correspondiente