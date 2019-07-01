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

async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7]
    // var promesas = ids.map(function (id){
    //     return obtenerPersonaje(id)
    // })
    var promesas = ids.map(id => obtenerPersonaje(id))
    // la ejecucion se la funcion se va a detener hasta que todas las promesas se resuelvan
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes()


