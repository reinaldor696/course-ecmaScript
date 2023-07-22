//actualizacion javascript junio 2020


//optional chaining
//podemos tener un objeto que dentro puede tener la representacion de llave valor y esa llave valor puede ser otro objeto, y cuando queramos acceder a ese elemento podemos tener errores, errores que puden romper el codigo

//nota:cuando se trabaje con framework o librerias, esta caracteristica ayuda bastante a poder validar que la informacion este presente y que no rompa tu aplicativo y que al dia de mañana la interfaz pueda verse totalmente en blanco o que no presente lo que debe presentar, con esta caracteristica se puede validar y no romper el flujo de la aplicacion


const user = {
    gndx: {
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
}

//usamos el simbolo de pregunta "?" para saber si user existe, lo mismo hacemos con bebeloper y con esto no regresar al mismo elemento
console.log(user?.bebeloper?.country);


//el codigo no marca error pero nos regresa un undefained y es lo que enecesitamos que nos regrese ese valor para poder hacer una validacion y no caer en un error que cause rompero todo el codigo

