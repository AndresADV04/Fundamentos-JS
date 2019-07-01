const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }
//la funcion solo se ejecuta si el request es exitoso

function obtenerPersonaje(id, callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(URL, opts, function (person) {
        console.log(`Hola, yo soy ${person.name}`)
        if(callback){
            callback()
        }
    })
}
//no se sabe en que orden van a llegar las respuestas
//Asi no, ya que se ejecuta el segundo parametro primero inmediatamente
//obtenerPersonaje(1, obtenerPersonaje(2))
//funcion que no se este ejecutando, se obtiene el personaje 1 y hace callback a la funcion
//callbackhell 
obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4, function () {
                obtenerPersonaje(5, function () {
                    obtenerPersonaje(6, function () {
                        obtenerPersonaje(7)
                    })
                })
            })
        })
    })
})



