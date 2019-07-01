var edad = 27;
// edad = edad + 1;
// edad+=1;
edad++;
var peso = 75;
// peso = peso - 2;
peso -= 2;
var sandwich = 1;
// peso = peso + sandwich;
peso += sandwich;
var jugarFutbol = 3;
// peso = peso - jugarFutbol;
peso -= jugarFutbol;

var precioVino = 200.3;

var total = Math.round(precioVino * 100 * 3) / 100;
var totalStr = total.toFixed(3);
var total2 = parseFloat(totalStr);
var pizza = 8;
var personas = 2;
var cantPorPer = pizza / personas;
console.log(cantPorPer);
