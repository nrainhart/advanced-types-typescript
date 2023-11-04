// noinspection JSAnnotator

type Opcional<T> = {
    [K in keyof T]: T[K] | null
}

let tipoDeNombre: Opcional<Alumno>["nombre"]

// @ts-ignore
const jose: Alumno = { nombre: "jose", legajo: null }

const joseOpcional: Opcional<Alumno> = { nombre: "jose", legajo: null }

// Typescript: https://www.typescriptlang.org/docs/handbook/utility-types.html
// Type-fest:  https://github.com/sindresorhus/type-fest



//------------------

type Event3 =
    | {
        type: 'VIEW'
    }
    | {
        type: 'LOG_IN_ATTEMPT'
        emailAddress: string
    }
    | {
        type: 'LOG_IN_SUCCESS'
        accessToken: string
    }

type EventName3 = Event3['type']
type EventPayload3<T> = Omit<Extract<Event3, { type: T }>, 'type'>

function on3<T extends EventName3>(event: T, callback: (payload: EventPayload3<T>) => void) {
    // registrar callback
}

on3('LOG_IN_SUCCESS', payload => {
    payload.accessToken
})