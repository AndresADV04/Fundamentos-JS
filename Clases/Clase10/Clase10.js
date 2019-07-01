var william = {
  nombre : 'william',
  apellido: 'garcia',
  edad: 17,
  ingeniero: false,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  dron: false
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

function mayordeEdad(persona){
  if(persona.edad >= 18){
      console.log(`${persona.nombre} es mayor de edad.`)
  }else{
      console.log(`${persona.nombre} no es mayor de edad.`)
  }
}
mayordeEdad(william)
