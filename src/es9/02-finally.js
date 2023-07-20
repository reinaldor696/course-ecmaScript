//actualizacion javascript junio 2018

const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('hey!!');
        } else {
            reject('no funciono');
        }
    })
}

anotherFuncion()
.then(response => console.log(response))
.catch(err => console.log(err))
.finally(() => console.log('finally'));
//finally

//nos permite mostrar y tener una funcion anonima para hacer algo cuando ya termino la promesa, ya sea mostrar un mensaje o ejecutar alguna accion de la necesidad de nuestro programa