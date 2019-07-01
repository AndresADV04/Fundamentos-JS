const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }
//la funcion solo se ejecuta si el request es exitoso

function obtenerPersonaje(id) {
    
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get(URL, opts, function (data){
            //no se va a llamar hasta que el get sea exitoso
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`Sucedio un error al optener el personaje ${id}`)
}

obtenerPersonaje(1)
    .then(function(personaje){
        console.log(`El personaje 1 es ${personaje.name}`)
    })
    .catch(onError)



