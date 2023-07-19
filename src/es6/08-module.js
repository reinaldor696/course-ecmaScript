//actualizacion javascript junio 2015
//antes de la version es6 no existian los modulos

//aca colocamos import ya que es el sitio donde recibiremos nuestra variable seguido de la variable y un from para especificar de que archivo queremos importar
//NOTA IMPORTANTE: cuando importamos un elemento de otro archivo seleccionamos la ubicacion y al final colocamos .js para que pueda reconocer el modulo 
import hello from "./module.js";

hello();

//NOTA IMPORTANTE 2: debemos colocar en el package.json y agregar ("type": "module") para que pueda funcionar el modulo