class Modificador {
    constructor(valor) {
        this.valor = valor
    }

    static masOMenos (n) {
        return n >= 0 ? `+${n}`:n
    }

    calcModificador() {
        return Math.floor((this.valor - 10) / 2)
    }
}

export default Modificador