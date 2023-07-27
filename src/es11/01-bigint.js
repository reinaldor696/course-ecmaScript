//actualizacion javascript junio 2020

//bigint

//la representacion para hacerlo como se venia manejando es colocar una "n" al final esto nos permite saber que tenemos este manejo de numero
//lo vemos igual como valor numerico, cuando se este tranajan do con numeros grandes la "n" tiene sentido
const aBigNumber = 98544655131321n;
//este es otro modo de hacer la expresion en del numero grande sin la n
const anotherBigNumber = BigInt(98544655131321);

console.log(aBigNumber);
console.log(anotherBigNumber);