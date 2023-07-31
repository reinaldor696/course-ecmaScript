//actualizacion javascript junio 2021

//private
/*se coloca el numeral"#" con esto se identifica que un elemento se vuelve privado, solo puede ser accedido dentro de la misma clase*/
//privado dentro de una clase

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    #speak() {
        return 'hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const bebeloper1 = new user('david', 25);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);