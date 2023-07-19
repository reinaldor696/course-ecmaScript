//actualizacion javascript junio 2015


//generator nos permite tener una funcion de tipo especial que nos va retornar una serie de valores segun el algoritmo dado recordando este recurso
//es un tipo de iterador personalizado que nos es util y no requiere una programacion tan robusta y nos permite definir un algoritmo iterativo para escribir una funcion que puede mantener ese estado

//se le coloca una asterisco a la funcion para identificarlo como un generator
//utilizamos (for of) por cada uno de los elemento en el array sucede algo
//usamos yield y esto se usa para retornar el valor de cada uno de esos valores segun sea el caso

function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

//con (const it) generamos la instancia
//el next() es un metodo que se ejecuta dentro del generator para recorrer el array segun sea el caso, el next 

const it = iterate(['oscar', 'david', 'ana', 'ulise', 'jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);