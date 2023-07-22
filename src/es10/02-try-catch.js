//actualizacion javascript junio 2019

//try catch
//lo que hace es intentar correr un bloque sino funciona entra en marcha el catch
//usamos dentro de console.log error para imprimir el error
try {
    hello()
} catch (error) {
    console.log(error);
}

//podemos personalizar el mensaje del error en vez de mostrar el error con este metodo

try {
    hello2()
} catch {
    console.log('Esto es un error');
}

//esto tiene caso de uso particular, lo ideal es manejar el error, ya que te da muchos mas datos, si se personaliza no se sabe que esta pasando, ya que puede ser errores de sintaxys o referencia
//nota importante: siempre usar el "error"