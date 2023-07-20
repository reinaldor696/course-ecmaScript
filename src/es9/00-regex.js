//actualizacion javascript junio 2018

//regex

//captura en grupos valores que estan dentro de una expresion regular

//generamos una constante donde llamada regex donde va a estar la regla que nosostros utilizamos 

//en este eregex mostramos que es un manejo de fechas para los primeros 4 caracteres el años, para el siguiente el mes, y para el ultimo el dia

const regex = /(\d{4})-(\d{2})-(\d{2})/;

//luego utilizamos la ejecucion para validar y obtener este grupo de elementos sea el caso
//el matchers nos permite ver si esto cumple el standard del regex que pondremos en juego
//la ejecutamos sobre un string

const matchers= regex.exec('2022-01-01');

//console.table muestra los archivos en una tabla
console.table(matchers);