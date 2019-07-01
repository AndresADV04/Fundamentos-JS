var nombre = 'William'


//alcance local, no se modifica la variable global
function nombreMayus(nombreP){
  //window.nombre Acceder a la variable global
  nombreP = nombreP.toUpperCase();
  console.log(nombreP);
}

nombreMayus(nombre);

//WILLIAM se modifica la variable global
