var william = {
    nombre: 'William',
    apellido: 'Garcia',
    edad: 20,
    peso: 75
}

console.log(`Al inicio del año ${william.nombre} pesa ${william.peso}kg.`);

//const aumentarPeso = parentesis opcionales cuando es un parametro (pesona) => persona.peso += 200

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365
const aumentarPeso = persona => persona.peso += INCREMENTO_PESO
const adelgazarPeso = persona => persona.peso -= INCREMENTO_PESO

for(var i = 1; i <= DIAS_DEL_ANO; i++){
  var random = Math.random()
  //25% de las veces
  //si se modifica el objeto dentro de la funcion este se modifica afuera tambien, si no se quiere esto se debe crear un nuevo objeto
  if (random < 0.25){
    aumentarPeso(william)
  }else if(random < 0.5){
    //adelgazar peso
    adelgazarPeso(william)
  }
}



console.log(`Al final del año ${william.nombre} pesa ${william.peso.toFixed(1)}kg.`);
