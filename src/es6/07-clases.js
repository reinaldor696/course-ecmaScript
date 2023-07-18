//actualizacion javascript junio 2015

//declarando
class User {};

//instancia de una clase
//const newUser = new User();

class user {
    //metodos
    greeting() {
        return 'hello';
    }
};

//aqui generamos la instancia de esta clase
const gndx = new user();
console.log(gndx.greeting());
//podemos aplicar dos instancias distintas de una misma clase ej
const bebeloper = new user();
console.log(bebeloper.greeting());

//constructor

//es donde inicializamos elementos de esta clase
class user {
    //constructor
    constructor() {
        console.log('new user');
    }
    greeting() {
        return 'hello';
    }
}

const david = new user();

//this

//hace referencia al elemento padre que lo contiene

class user {
    constructor(name) {
        this.name = name;
    }
    //metodos
    speak() {
        return 'hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const anna = new user('anna');
console.log(anna.greeting());

//setters getters

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //metofodos
    speak() {
        return 'hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    //toma el numero o dato asignado en la instacia por eso es get
    get uAge() {
        return this.age;
    }
    //sirve para agregar o cambiar el valor por eso al mostarlo cambia el valor
    set uAge(n) {
        this.age = n;
    }
}

//aca generamos la intancia y enviamos el valor del constructor
const bebeloper1 = new user('david', 25);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);