var william = {
  nombre: 'William',
  apellido: 'Garcia',
  edad: 20
}

var squall = {
  nombre: 'Squall',
  apellido: 'Leonard',
  edad: 25
}

//alcance local, no se modifica la variable global
/*function nombreMayus(persona){
  window.nombre Acceder a la variable global
  console.log(persona.nombre.toUpperCase());
}*/
//Desglosar el objeto con parametros que querremos, obtenemos el atributo que deseamos
function nombreMayus({ nombre }){
  //window.nombre Acceder a la variable global
  console.log(nombre.toUpperCase());
}

nombreMayus(william);
nombreMayus(squall);
nombreMayus({nombre : 'Pepito'});
//nombreMayus(); undefined no existe
nombreMayus({ apellido: 'Gomez '}); // EL objeto no tiene el atributo que espera como parametro

//WILLIAM se modifica la variable global
