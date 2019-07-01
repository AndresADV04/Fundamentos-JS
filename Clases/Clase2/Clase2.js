var nombre = 'William', apellido = 'Garcia'
var nombreMayus = nombre.toUpperCase();
var apellidoMinus = apellido.toLowerCase();
var primeraLetra = nombre.charAt(0);
var longitudString = nombre.length
// var nombreCompleto = nombre + ' ' + apellido
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}` //interpolacion de texto
//substr(desde donde, cuantos caracteres)
var str = nombre.substr(1,2);
//desafio -> ultima letra del apellido
// -1 porque charAt empieza a contar desde 0
console.log(nombre.charAt(nombre.length-1));
