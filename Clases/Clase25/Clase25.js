/*
function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}
//asignar funciones a objetos
Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
//en arrow function this apunta a window (espacio global)
Persona.prototype.soyAlto = function()  {
    var esAoB = this.altura > 1.8 ? 'alto':'bajo'
    console.log(`Hola, soy ${this.nombre} ${this.apellido} y soy ${esAoB}.`)   
}
function Desarrollador(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}
 
Desarrollador.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}
*/
class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto(){
        var esAoB = this.altura > 1.8 ? 'alto':'bajo'
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y soy ${esAoB}.`) 
    }
}
//extends = hereda
class Desarrollador extends Persona{
    constructor(nombre, apellido,altura){
        //llamamos al constructor padre
        super(nombre,apellido,altura)       
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
    }
}




//Si el prototipo no encuentra el metodo, busca en el prototipo padre y asi sucesivamente

//New = crear nuevos objetos dado un prototipo
// var william = new Persona('William','Garcia',1.72)
// var diana = new Persona('Diana','Perez',1.82)
 