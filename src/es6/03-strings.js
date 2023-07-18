//actualizacion javascript junio 2015

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

//template literals
//NOTA:las comillas francesas(`)

let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

//multi-line strings
//es la forma en la que se puede trabajar en multiples lineas asignadas dentro un string para hacer los salto segun sea el caso

//manera que se ejecutaba antes de la actualizacion
let lorem = 'esto es un string \n' + 'esto es otra linea';


//manera de saltar lineas con actualizacion es6 a traves de template literals
let lorem2 = `Esta es una frase epica 
la continuacion de esa frase epica.
`;

console.log(lorem);
console.log(lorem2);


