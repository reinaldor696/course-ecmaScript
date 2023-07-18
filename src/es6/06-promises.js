//actualizacion javascript junio 2015


//las promesas es una forma de trabajar el asincronismo, ayuda a resolver como trabajar con los callback, es una funcion que recibe como parametro otra funcion y la ejecuta segun sea el caso de la condicion if

//una promesa es algo que va a pasar. puede pasar hoy, mañana o nunca
const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            resolve('hey!!');
        } else {
            reject('no funciono');
        }
    })
}

anotherFuncion()
.then(response => console.log(response))
.catch(err => console.log(err));