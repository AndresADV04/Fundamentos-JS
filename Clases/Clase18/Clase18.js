var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

//un solo parametro sin parentesis, y solo retorna se puede quitar el return
//const esAlta = persona => persona.altura > 1.8
//desglosar a la persona (objeto)
const esAlta = ({altura}) => altura > 1.8
const esBaja = ({altura}) => altura < 1.8
var personas = [sacha, alan, martin, dario, vicky, paula]

//.filter(condicion), filter devuelve un nuevo arrary
var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)
//funcion anonima
/*var personasAltas = personas.filter(function(persona){
    return persona.altura > 1.8
})*/


console.log("Peronas altas:")
for(var i = 0; i < personasAltas.length; i++){
    console.log(personasAltas[i].nombre)
}
console.log("Peronas Bajas:")
for(var i = 0; i < personasBajas.length; i++){
    console.log(personasBajas[i].nombre)
}


