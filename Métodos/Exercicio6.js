let fila = []
fila.push(parseInt(prompt("Informe um número:")))
fila.push(1)
fila.push(2)
console.log("Fila:" + fila)

x = fila.shift()
console.log("Removido:" + x)
console.log("Fila:" + fila)

//*************************************************** 

function limpar(fila){
    while (fila.length != 0){
        fila.shift()
    }
}
fila = [1, 2 ,3 , 4, 5]
console.log("Fila antes:" + fila)

limpar (fila)
console.log("Fila depois:" + fila)

//*************************************************** 

function limpar(pilha) {
    while (pilha.length != 0) {
        pilha.pop()
    }
}
pilha = [1, 2, 3, 4, 5]
console.log("Pilha antes:" + pilha)

limpar(pilha)
console.log("Pilha depois:" + pilha)

//************************************************** 

function topo(pilha) {
    if (pilha.length != 0) {
        let x = pilha.pop()
        pilha.push(x)
        return x
    } else {
        return null
    }
}

let pilha = []
let x = 1

pilha.push(x)
pilha.push(5)
pilha.push(7)

console.log("Pilha antes:" + pilha) 
x = pilha.pop()
console.log("Removido:" + x)
console.log("Pilha depois:" + pilha) 

pilha.push(10)
pilha.push(45)
console.log("Pilha atual:" + pilha) 

console.log("Topo:" + topo(pilha)) 
console.log("Pilha após topo:" + pilha) 

limpar(pilha)
console.log("Pilha após limpar:" + pilha)

//******************************************************* 

