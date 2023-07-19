//actualizacion javascript junio 2017

//metodo Object.value
//nos devuelve un array con los valores correspondiente a las propiedades enumerables de un objeto

//transformamos la informacion, pero en este caso solo obtenemos los valores dentro de un array, y asi solo obtener un array de strings
const countries = {MX: 'Mexico', CO: 'Colombia', CL: 'Chile', PE: 'Peru'};

console.log(Object.values(countries));