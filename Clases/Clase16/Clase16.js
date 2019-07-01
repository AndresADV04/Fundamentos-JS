var signo = prompt('¿Cuál es tu signo?')
console.log(signo);


switch(signo.toLowerCase()){
  case 'acúario':
  case 'acuario':
    console.log('Tu eres Acuario.');
  break;
  case 'piscis':
    console.log('Tu eres piscis.');
  break;
  case 'cancer':
    console.log('Tu eres cancer.');
  break;
  default:
    console.log('Tu no tienes signo.');
  break;
}
