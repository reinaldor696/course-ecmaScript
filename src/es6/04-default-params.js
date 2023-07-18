//actualizacion javascript junio 2015

//manera de hacer una funcion con los parametros antes de la actualizacion utilizando el or (||) para asignar el valor al parametro
function newUser(name, age, country) {
    var name = name || 'Reinaldo';
    var age = age || 29;
    var country = country || 'VEN';
    console.log(name, age, country);
};

newUser();
newUser('paola', 37, 'CO');

//function after update es6 we used default params 
function newAdmin(name = 'reinaldo', age = 29, country = 'VEN') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('ana', 48, 'PE');