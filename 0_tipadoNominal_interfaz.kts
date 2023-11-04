interface Programa {
    fun corre()
}

fun ejecutar(programa: Programa) {
    programa.corre()
}

class Saludador : Programa {
    override fun corre() {
        print("¡Hola!")
    }
}

class Conejito {
    private var energia = 100

    fun corre() {
        this.energia -= 20
    }
}

fun main() {
    // Esto compila
    ejecutar(Saludador())

    // Esto no
    // ejecutar(Conejito());
}