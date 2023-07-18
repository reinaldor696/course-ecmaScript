//actualizacion javascript junio 2015
//a partir de esta actualizacion se crearon nuevas variables aparte der var que son let y const

//var

//con var podemos reasignar la variable
var lastName = 'David';
lastName = 'oscar';
console.log(lastName);

//let

//con let igual podemos reasignar una variable
let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

//const

//la variable const no puede ser reasignada
const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple'; //variable var function scope puede trabajar dentro y fuera de una funcion 
        let fruit2 = 'Kiwi'; //let y const son block scope solo trabajan dentro del lugar declarado
        const fruit3 = 'Banana';
    };
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
};

fruits();