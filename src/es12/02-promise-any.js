//actualizacion javascript junio 2021

//promise any
//captura la respuesta de la primera que sea de forma satisfactoria
const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));

//devuelve la primera promesa que cumpla