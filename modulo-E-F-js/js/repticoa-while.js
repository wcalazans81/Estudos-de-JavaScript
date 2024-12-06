function respos() {
    var valor = window.document.getElementById('ivalor')
    var res = window.document.getElementById('txtres')
    var valor = Number(valor.value)
    var c = 1
    while (c <= valor) {
        res.innerText = `passo ${c}`
        c++
    }

}

/*var c = 1
do {
    res.innerText = `passo ${c}`
        c++
}while (c <= valor) o invareso da primeira estrutura de repetição*/