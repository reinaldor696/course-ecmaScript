//actualizacion javascript junio 2020

//match all
//este concepto tiene que ver regex no es mas que otra para genera diferentes filtros o diferentes reglas que nos van a permitir filtrar, buscar, etc
//con regex podemos validar que una contraseña cumpla el objetivo, o validar que input tenga el correo electronico valido

const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, Kiwi, apple, orange, etc, etc.';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}