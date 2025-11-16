let tamanho = 13
let vetor = []

for (let i = 0; i < tamanho; i++) {
  vetor[i] = null
}

function hash(letra) {
  return letra.charCodeAt(0) % tamanho
}

function inserir(letra) {
  let posicao = hash(letra)
  let tentativas = 0

  while (vetor[posicao] !== null && vetor[posicao] !== letra) {
    posicao = (posicao + 1) % tamanho
    tentativas++

    if (tentativas === tamanho) {
      console.log("Tabela cheia!")
      return
    }
  }

  vetor[posicao] = letra
  console.log("'" + letra + "' na posição " + posicao)
  return
}

function buscar(letra) {
  let posicao = hash(letra)
  let tentativas = 0

  while (vetor[posicao] !== null && tentativas < tamanho) {
    if (vetor[posicao] === letra) {
      return posicao
    }

    posicao = (posicao + 1) % tamanho
    tentativas++
  }

  return -1
}

let letras = ['A', 'B', 'D', 'E', 'J', 'K', 'N', 'O', 'R', 'S', 'Y', 'Z']

for (let l of letras) {
  inserir(l)
}

console.log("\nVetor Hash:", vetor)
console.log("Buscar D →", buscar('D'))
console.log("Buscar E →", buscar('E'))
console.log("Buscar Z →", buscar('Z'))
console.log("Buscar A →", buscar('A'))
console.log("Buscar W →", buscar('W'))
