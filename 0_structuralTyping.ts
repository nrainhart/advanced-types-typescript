interface Vaca {
    mugi: () => string
}

let unaVaca: Vaca

class VacaLoca implements Vaca {
    mugi() {
        return 'Muuuuuuuuuu'
    }

    grita() {
        return 'Aaaaaaaaaaaaaaa'
    }
}

unaVaca = new VacaLoca()

unaVaca = { mugi: () => 'Mu' }