const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }
//la funcion solo se ejecuta si el request es exitoso

function obtenerPersonaje(id) {

    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(URL, opts, function (data) {
                //no se va a llamar hasta que el get sea exitoso
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedio un error al optener el personaje ${id}`)
}
//cuando la promesa se resuelva
obtenerPersonaje(1)
    .then(personaje1 => {
        console.log(`El personaje 1 es ${personaje1.name}`)
        //devolvemos una promesa cual? obtenerPersonaje(2)
        return obtenerPersonaje(2)
    })
    .then(personaje2 => {
        console.log(`El personaje 2 es ${personaje2.name}`)
        return obtenerPersonaje(3)
    })
    .then(personaje3 => {
        console.log(`El personaje 3 es ${personaje3.name}`)
        return obtenerPersonaje(4)
    })
    .then(personaje4 => {
        console.log(`El personaje 4 es ${personaje4.name}`)
        return obtenerPersonaje(5)
    })
    .then(personaje5 => {
        console.log(`El personaje 5 es ${personaje5.name}`)
        return obtenerPersonaje(6)
    })
    .then(personaje6 => {
        console.log(`El personaje 6 es ${personaje6.name}`)
        return obtenerPersonaje(7)
    })
    .then(personaje7 => {
        console.log(`El personaje 7 es ${personaje7.name}`)
    })
    .catch(onError)



