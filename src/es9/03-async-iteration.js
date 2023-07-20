//actualizacion javascript junio 2018

//iteration async

//colocamos async para hacer entender al programa que esta funcio tendra este concepto y camos un generator con el asterisco, lista funcion que no es mas que un generador
//dentro usamos la palabra reservada yield y colocamos un await de una promesa
async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
//usamos la palabra next() para pedir cada uno de los valores de la promesa, y utilizamos el then() para saber que va a pasar
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello');

//--------------------------
//otro concepto que es agregado en los iteradores es el uso del for
//

async function arrayOfNames(arrays) {
    for await (let value of arrays) {
        console.log(value);
    }
}

const names = arrayOfNames(['Oscar', 'Maria', 'Santiago']);
console.log('After');