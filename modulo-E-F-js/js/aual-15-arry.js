let num = [4, 8, 2]
let copy = num
//num = [] apaga a lista
//num.shift(num.length) apaga totalmente a lista
num[3] = 9 // adicionando item a lista por chave
num.push(5)// adicionando uma chave no final da lista
var s = num[0] + num[2]// operações por cahve
console.log(`A soma de elementos por chave é iqual a ${s}`)
console.log(num)
console.log(`O comprimento da lista é ${num.length} elementos`) // Ver comprimento da lista
console.log(num.sort()) // ordenando lista de forma crescente
console.log(`O indice ou chave do número 4 é ${num.indexOf(4)}`) // revela indice ou chave do elemento
console.log(`O indice ou chave do número 1 é ${num.indexOf(1)}`) // se não houver o na lista retonorna -1
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else{
    console.log(`O valor está na posição ${pos}`)
}

for(let pos = 0; pos < num.length; pos++) {
    var i = pos
    console.log(` ${i+1}°  ${num[pos]} item`)
}

for(let pos in num) {
    let i = Number(pos)
    console.log(` ${i+1}°  ${num[pos]} item`)
}
