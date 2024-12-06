function contagem() {
    var inicio = document.getElementById('xinicio')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var contar = document.getElementById('txtres')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        contar.innerHTML = 'Impossível contar!!'
       // window.alert('[ERRO] Faltam dados!!')
    } else {
        contar.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            //contagem crescente
            for(var c = i; c <= f; c += p) {
            contar.innerHTML += `${c} \u{1F449} `
        }
        } else {
            //contagem decrescente
            for(var c = i; c >= f; c -= p) {
                contar.innerHTML += `${c} \u{1F449} `
            }
        }
        contar.innerHTML += ` \u{1F3C1} ` 
    }
}
    