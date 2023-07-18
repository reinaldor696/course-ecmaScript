//actualizacion javascript junio 2015

//normal function

function square(num) {
    return num * num;
}

//arrow function
//NOTA: se recomienda hacer las funciones con variables const

const square = (num) => {
    return num * num;
}

//function con return implicito
//NOTA: si la funcion solo lleva un parametro podemos colocarla sin parentesis y sin llaves la funcion para hacerlo un poco mas entendible

const square = num => num * num;