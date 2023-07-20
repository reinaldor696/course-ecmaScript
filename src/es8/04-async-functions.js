//actualizacion javascript junio 2017

//async function o funciones asincronas

//dentro de la funcion asincronas utilizamos las promesas, usamos igual el "resolve" y el "reject", y en vez de utilizar el if solo colocamos el true dentro de parentesis, usamos el simbolo de pregunta "?" en vez del if y para el else usamos el simbolo ":"
//colocamos la sentencia verdadero que es un setTimeout
//NOTA:luego de la tenecia no colocamos ";"
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Asynnc!!'), 5000)
        : reject(new Error('Error!'));
    })
}

//creamos una funcion de palabras reservada la cual va a recibir nuestras palabras reservadas que son async y await para ejecutar la promesa y ver el resultado y como de alguna manera se ve afectada o no segun sea el caso

//se coloca antes de los argumentos la palabra async y nos permite identificar esta funcion con el concepto aprendido, utilizamos la palabra reservada await dentro
//await significa espera lo que suceda en la funcion de la promesa y loego ejecuta los console.log
const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('hello');
}

//anotherFn() es una promesa que hemos utilizado el concepto de ese timeout para esperar a mostrar ese resolve
console.log('Before');
anotherFn();
console.log('After');

//NOTA IMPORTANTE:aqui se puede ejecutar bloques de codigo consecuentes y que no deben ser bloqueantes, significa que el siguiente bloque debe ser ejecuta sin ningun problema e independientemente de lo que suceda en la promesa