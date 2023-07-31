//actualizacion javascript junio 2020 

//dynamic import
/*se usa para dar dinamismo en la pagina web y solo activar el javascript necesario para que la pagina no sea tan pesada, asi no es necesario cargar todo el javascript de una sola ve, se hace a traves del modulo, exportando funciones y e importandolas en el archivo main.js*/

const button = document.getElementById("btn");

button.addEventListener("click", async function() {
    const module = await import("./module.js");
    console.log(module);
    module.hello();
});