var fila = []
let x = parseInt(prompt("Informe um número:"))
fila.push(x)
fila.push(1)
fila.push(2)

console.log("Fila: " + fila)

x = fila.shift()
console.log("Elemento removido: " + x)
console.log("Fila: " + fila)

//*************************************************** 

function limpar (fila){
    while (fila.length != 0){
        fila.shift()
    }
}
fila = [1, 2 ,3 , 4, 5]
console.log("Antes:", fila)

limpar (fila)
console.log("Depois: ", fila)

//*************************************************** 

function limpar(pilha) {
    while (pilha.length != 0) {
        pilha.pop()
    }
}

function topo(pilha) {
    if (pilha.length != 0) {
        let x = pilha.pop()
        pilha.push(x)
        return x
    } else {
        return null
    }
}

// Código principal
let pilha = []
let x = 1

pilha.push(x)
pilha.push(5)
pilha.push(7)

console.log("Pilha: " + pilha) 
x = pilha.pop()
console.log("Elemento removido: " + x)
console.log("Pilha: " + pilha) 

pilha.push(10)
pilha.push(45)
console.log("Pilha: " + pilha) 

console.log("Topo: " + topo(pilha)) 
console.log("Pilha após topo: " + pilha) 

limpar(pilha)
console.log("Pilha após limpar: " + pilha)

//******************************************************* 

function intercalar_filas(fila1, fila2){
    let fila_resultado = []
    let i = 0

    while (i<fila1.length || i<fila2.length){
        if (i<fila1.length){
            fila_resultado.push(fila1[i])
        }
        if (i<fila2.length){
            fila_resultado.push(fila2[i])
        }
        i++
    }
    return fila_resultado
}
let fila1 = [1, 3, 5, 7]
let fila2 = [2, 4, 6, 8, 9, 10]

let resultado = intercalar_filas(fila1, fila2)
console.log(resultado)

//********************************************************

function inverter_palavras(frase){
    let palavras = frase.split(" ")
    let resultado = []

    for(let palavra of palavras){
        let pilha = []
        let invertida = ""

        for (let letra of palavra){
            pilha.push(letra)
        }
        while(pilha.length>0){
            invertida += pilha.pop()
        }
        resultado.push(invertida)
    }
    return resultado
}
let texto = "Exercício muito complicado"
let saida = inverter_palavras(texto)

console.log("Entrada:", texto)
console.log("Saída:", saida)