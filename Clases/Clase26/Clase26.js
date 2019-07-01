class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn){

        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        //undefined == false parametro vacio
        if(fn){
            fn(nombre, apellido)
        }
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
    saludar(fn){
        //var nombre = this.nombre
        //var apellido = this.apellido
        var {nombre, apellido} = this
        
        console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador/a`)
        if(fn){
            fn(nombre, apellido,true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.log(`Ah mira, no sabia que eras desarrollador/a`)
    }
}


//New = crear nuevos objetos dado un prototipo
 var william = new Persona('William','Garcia',1.72)
 var monica = new Persona('monica','Arias',1.72)
 var diana = new Desarrollador('Diana','Perez',1.82)

 william.saludar()
 monica.saludar(responderSaludo)
 diana.saludar(responderSaludo)
 