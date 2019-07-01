var contador = 0

const llueve = () => Math.random() < 0.25

do{
  contador++
}while(!llueve())

// ? "true":"false";
var cant = contador > 1 ? "veces":"vez";

console.log(`Fui a ver si llovia ${contador} ` + cant);
