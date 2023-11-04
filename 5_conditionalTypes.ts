type Nodo = NodoNum | NodoStr
interface NodoNum { valor: number }
interface NodoStr { valor: string }

function valor<N extends Nodo>(
    nodo: N
): N extends NodoStr ? string :
    N extends NodoNum ? number :
        never {
    return nodo.valor as any
}

const x = valor({ valor: "foo" })
const y = valor({ valor: 95 })

let unNodo: Nodo;
if (Math.random() > 0.5) {
    unNodo = { valor: "foo" }
} else {
    unNodo = { valor: 95 }
}
const z = valor(unNodo)

//------------------

type EventName = 'VIEW' | 'LOG_IN_ATTEMPT' | 'LOG_IN_SUCCESS'

type EventPayload<T> = T extends 'VIEW' ? void
    : T extends 'LOG_IN_ATTEMPT' ? { emailAdress: string }
    : T extends 'LOG_IN_SUCCESS' ? { accessToken: string }
    : never;

function on<T extends EventName>(event: T, callback: (payload: EventPayload<T>) => void) {
    // registrar callback
}

on('LOG_IN_SUCCESS', payload => {
    payload.accessToken
})