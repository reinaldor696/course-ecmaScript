//actualizacion javascript junio 2020

//global this
//hay diferentes formas que tenemos para acceder al objeto global, en este caso a todo lo que este almacenado ahi, con estos accedemos a diferentes elementos en el navegador

//window es un objeto que contiene varias cosas
//nos ayuda a utilizar un elemento y metodos que pueden ser utilizado algunos son parte de la logica de javascript
//es una gran cantidad de recursos sobre window que pueden ser utilizadas
console.log(window); // funciona solo en el navegador
console.log(global); // y asi funciona del lado de node
console.log(selft); //nos ayuda de lado de un webworker
console.log(globalThis); // se utiliza en contexto global segun sea el caso y sirve para usar las 3 anteriores en una sola

//esto solo se podia ejecutar en la consolo del navegador, y en esta actualizacion lo solucionan y puede ser utilizada en node