//actualizacion javascript junio 2019

//fromEntries
//object.entries en ademas de convertir un objeto en un array de arrays vamos a pode hacer tambien un cambio inverso
//pasar un array de arrays a un objeto

//la opcion de new Mapes para pasar dentro lo que seria esta estructura de array que tranformaremos a un objeto
const entries = new Map([["name", "oscar"], ["age", 34]]);
console.log(entries);

//usamos Object.fromEntries() para hacer la transformacion
console.log(Object.fromEntries(entries));

//NOTA:estos metodos que usamos manipulacion de los elementos de objectos de arrays nos ayudan bastante cuando recibimos un valor que regresa un array de arrays y que dentro tiene objetos y que hay que tener varias profundidades para manipular esta informacion, muchas veces llegan en consulta de API o de  alguna transformacion de datos que estemos realizando 