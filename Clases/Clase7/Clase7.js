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

function nombreMayus(persona){
  //window.nombre Acceder a la variable global
  //var nombre  = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase());
}

nombreMayus(william);
nombreMayus(squall);
nombreMayus({nombre : 'Pepito'});
//nombreMayus(); undefined no existe
//nombreMayus({ apellido: 'Gomez '}); // EL objeto no tiene el atributo que espera como parametro


//Desafio
function imprimirNombyEdad(persona){
  var {nombre, edad} = persona;
  console.log(`Hola me llamo ${nombre} y tengo ${edad} años.`);
}

imprimirNombyEdad(william);
imprimirNombyEdad(squall);
