//actualizacion javascript junio 2015
//antes de la version es6 no existian los modulos

//el uso del modulo es exportar variables o funciones de una archivo a otro para llevar un mejor orden del codigo, en este ejemplo exportamos nuestra variable que tiene una funcion de flecha:
const hello = () => {
    console.log('hello');
}

export default hello;

//---> se hace el import en el archivo 08-module.js