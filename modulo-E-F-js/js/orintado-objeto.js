/* Em um objeto on números são declarados sem aspas 
    As funções declaradas dentro do objeto com chamada externa
    como no exemplo abaixo.
*/
let pessoa = {nome: 'joão cagão',sexo: 'M', peso: 84.4, 
engordar(p=0) {
    console.log('Engordou!!')
    this.peso += p
}
 
}
console.log(pessoa)
pessoa.engordar(5)
console.log(`${pessoa.nome} pesa ${pessoa.peso} kg`)

