function eliminacaoVetor (n, m) {
    let pessoas = []
    for (let i = 1; i <= n; i++) {
        pessoas.push(i)
    }

    let indice = 0
    while (pessoas.length > 1) {
        indice = (indice + m - 1) % pessoas.length
        pessoas.splice(indice, 1)
    }

    return pessoas[0]
}

console.log("=== Problema da Eliminação usando VETOR ===")
let resultadoVetor = eliminacaoVetor(7, 3)
console.log("Pessoa restante:", resultadoVetor)

//************************************************************************************

function No(valor) {
    this.valor = valor
    this.proximo = null
}

function criarListaCircular(n) {
    let inicio = new No(1)
    let atual = inicio

    for (let i = 2; i <= n; i++) {
        atual.proximo = new No(i)
        atual = atual.proximo
    }

    atual.proximo = inicio
    return inicio
}

function eliminacaoListaEncadeada(n, m) {
    let atual = criarListaCircular(n)

    while (atual.proximo !== atual) {
        for (let i = 1; i < m - 1; i++) {
            atual = atual.proximo
        }
        atual.proximo = atual.proximo.proximo
        atual = atual.proximo
    }

    return atual.valor
}

console.log("\n=== Problema da Eliminação usando LISTA ENCADEADA ===")
let resultadoLista = eliminacaoListaEncadeada(7, 3)
console.log("Pessoa restante:", resultadoLista)


