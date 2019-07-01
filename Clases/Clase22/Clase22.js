function Persona(nombre, apellido, estatura){
    this.nombre = nombre
    this.apellido = apellido
    this.estatura = estatura
}
//asignar funciones a objetos
Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.altura = function() {
    var esAoB = this.estatura > 1.8 ? 'alto':'bajo'
    console.log(`Hola, soy ${this.nombre} ${this.apellido} y soy ${esAoB}.`)
}


//New = crear nuevos objetos dado un prototipo
var william = new Persona('William','Garcia','1.72')
var diana = new Persona('Diana','Perez','1.82')
william.saludar()
william.altura()
diana.altura()