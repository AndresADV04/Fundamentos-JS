const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

 
const opts = { crossDomain: true}
//la funcion solo se ejecuta si el request es exitoso

const onPeopleResponse = function(person){
    console.log(`Hola, yo soy ${person.name}`)
}


function obtenerPersonaje(id){
    const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(URL, opts, onPeopleResponse)
}
//no se sabe en que orden van a llegar las respuestas
// obtenerPersonaje(1)
// obtenerPersonaje(2)
// obtenerPersonaje(3)
for (var i = 1; i < 50 ; i++){
    obtenerPersonaje(i)
}
