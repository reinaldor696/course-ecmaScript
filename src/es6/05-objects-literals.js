//actualizacion javascript junio 2015

//enahced object literals

//esta manera se empezo a utilizar en el es6 antes de esto se debia asiganar siempre el mismo elemento a los objetos, esto es usado si la logica a desarrollar lo permite
function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        uId
    }
}

console.log(newUser('Daniela', 28, 'VEN', 1));