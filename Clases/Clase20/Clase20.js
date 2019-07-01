var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 90
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 100
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 72
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 88
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 76
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 55
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


/*const pasarAlturaCms = persona => {
    //retornamos un nuevo objeto, ... para pisar un atributo
    return {
        ...persona,
        altura: persona.altura * 100
    }
}*/

//devolver un objeto, recibe una persona y la desglosamos 
//map devuelve un nuevo array, pero se debe aclarar, sino  modifica el array original 

/*
asi modificamos el array original
const pasarAlturaCms = persona => { 
        persona.altura *= 100
        return persona
}
*/
const pasarAlturaCms = persona => ({ 
        ...persona,
        altura: persona.altura * 100
})

var personasCm = personas.map(pasarAlturaCms)

console.log(personasCm)
/*console.log("Peronas altas:")
for(var i = 0; i < personasAltas.length; i++){
    console.log(personasAltas[i].nombre)
}
console.log("Peronas Bajas:")
for(var i = 0; i < personasBajas.length; i++){
    console.log(personasBajas[i].nombre)
}*/


// var acum = 0
// for(var i = 0; i < personas.length; i++){
//     acum += personas[i].cantidadDeLibros;
// }
// console.log(`En total todos tienen ${acum} libros`)

//const reducer = (acum, personas) => acum + personas.cantidadDeLibros, desestructuramos a persona {cantidadDeLibros}
const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

//.reduce(funcion,valorInicial(acumulador))
var totalLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalLibros} libros`)




