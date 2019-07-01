function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
//asignar funciones a objetos
Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function()  {
    var esAoB = this.altura > 1.8 ? 'alto':'bajo'
    console.log(`Hola, soy ${this.nombre} ${this.apellido} y soy ${esAoB}.`)
   
}
//en arrow function this apunta a window (espacio global)

//New = crear nuevos objetos dado un prototipo
var william = new Persona('William','Garcia',1.72)
var diana = new Persona('Diana','Perez',1.82)
 