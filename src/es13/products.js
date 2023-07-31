//actualizacion javascript junio 2022

//top level await


//hacemos un import del recurso fetch luego de haber activado el npm install node-fetch
import fetch from "node-fetch";

//el fetch nos permite llamar a la api de practica de platzi
//creamos una variable utilizamos await y luego utilizamos fetch que es una peticion get y llamamos a la api
const response = await fetch('https://api.escuelajs.co/api/v1/products');

//agregamos una constante para lo que recibimos de la api lo transforme en un objeto json y lo cual lo vamos a usar para presentarlo en la estructura que necesitamos
// "response.json()"este es un metodo que esta disponible para hacer esa transformacion
const products = await response.json();

//hacemos el export de products y con esto lo podemos utilizar dentro de otro documento
export { products };