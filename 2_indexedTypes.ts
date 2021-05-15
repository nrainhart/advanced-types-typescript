// noinspection JSAnnotator

class Alumno {
    nombre: string
    legajo: number
}

let campo: keyof Alumno
let tipoDeCampoNombre: Alumno["nombre"]
let tipoDeCualquierCampo: Alumno[keyof Alumno]





//------------------

function dameElCampo<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

let pirulo: Alumno = { nombre: 'Pirulo', legajo: 0 }

const nombre = dameElCampo(pirulo, "nombre")

// @ts-ignore
const apellido = dameElCampo(pirulo, "apellido")


//------------------

type Event2 =
    | {
        type: 'INIT'
    }
    | {
        type: 'LOG_IN_ATTEMPT'
        emailAddress: string
    }
    | {
        type: 'LOG_IN_SUCCESS'
        accessToken: string
    }

type EventName2 = Event2['type']
type EventPayload2<E, T> = E extends { type: T } ? E : never

function on2<T extends EventName2>(event: T, callback: (payload: EventPayload2<Event2, T>) => void) {
    // registrar callback
}

on2('LOG_IN_SUCCESS', payload => {
    payload.accessToken
})