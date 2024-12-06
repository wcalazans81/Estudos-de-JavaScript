 
function parimp(n) {
    if (n % 2 == 0){
        return 'PAR'
    } else {
        return 'IMPAR'
    }
}
let res = parimp(11)
console.log(`O número é ${res}`)

function soma(n1=0, n2=0){
    return n1 + n2
}
console.log(soma(5, 2))
console.log(soma(5))

function fatorial(n){
    let fat = 1
    for (let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))