var william = {
  nombre : 'william',
  apellido: 'garcia',
  edad: 20,
  ingeniero: false,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  dron: false
}

var squall = {
  nombre: 'Squall',
  apellido: 'Leonard',
  edad: 13
}

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es: `)
  if (persona.ingeniero){
    console.log('ingeniero')
  }else{
    console.log('no es ingeniero')
  }
  if (persona.cocinero){
    console.log('cocinero')
  }
  if (persona.cantante){
    console.log('cantante')
  }
  if (persona.dj){
    console.log('dj')
  }
  if (persona.guitarrista){
    console.log('guitarrista')
  }
  if (persona.dron){
    console.log('Piloto de dron')
  }
}

imprimirProfesiones(william)
//buena practica mayuscula y con _
//constante valor fijo
const MAYORIA_DE_EDAD = 18

function esmayorEdad(persona){
  //retorna true o false dependiendo si se cumple o no la comparacion
  return persona.edad >= MAYORIA_DE_EDAD
}
//desglosamos la funcion  original
function mayordeEdad(persona){
  if(esmayorEdad(persona)){
      console.log(`${persona.nombre} es mayor de edad.`)
  }else{
      console.log(`${persona.nombre} no es mayor de edad.`)
  }
}
mayordeEdad(william)
mayordeEdad(squall)
