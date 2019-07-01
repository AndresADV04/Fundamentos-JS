var william = {
    nombre: 'William',
    apellido: 'Garcia',
    edad: 20,
    peso: 75
}

console.log(`Al inicio del año ${william.nombre} pesa ${william.peso}kg.`);

//const aumentarPeso = parentesis opcionales cuando es un parametro (pesona) => persona.peso += 200

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365
const aumentarPeso = persona => persona.peso += INCREMENTO_PESO
const adelgazarPeso = persona => persona.peso -= INCREMENTO_PESO
//.3 -> 30% .4 -> 40%
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
 const META = william.peso - 3

var dias = 0

while(william.peso > META){
  //debugger
  if(comeMucho()){
    //aumentarPeso
    aumentarPeso(william)
  }
  if(realizaDeporte()){
    //adelgazar
    adelgazarPeso(william)
  }
  dias += 1
}
console.log(`Pasaron ${dias} hasta que ${william.nombre} adelgazo 3kg.`);

//console.log(`Al final del año ${william.nombre} pesa ${william.peso.toFixed(1)}kg.`);
