// Estrutura da lista encadeada
function ListaEncadeada() {

    // Nó da lista
    let No = function (valor) {
        this.valor = valor
        this.proximo = null
    }

    // Estado interno da lista
    let inicio = null
    let tamanho = 0

    // -------------------------
    // a) Mostrar todos os elementos da lista
    this.mostrarTodos = function () {
        let atual = inicio
        let resultado = ''
        if (atual === null) {
            return 'Lista vazia'
        }
        while (atual) {
            resultado += atual.valor + (atual.proximo ? ' -> ' : '')
            atual = atual.proximo
        }
        return resultado
    }

    // -------------------------
    // b) Remover o primeiro elemento da lista
    this.removerPrimeiro = function () {
        if (inicio === null) {
            return 'A lista já está vazia'
        }
        let removido = inicio.valor
        inicio = inicio.proximo
        tamanho--
        return 'Elemento removido: ' + removido
    }

    // -------------------------
    // c) Inserir um elemento no início da lista
    this.inserirNoInicio = function (valor) {
        let novoNo = new No(valor)
        novoNo.proximo = inicio
        inicio = novoNo
        tamanho++
    }

    // -------------------------
    // d) Retornar a posição do elemento na lista (0-based). Retorna -1 se não existir
    this.posicaoDoElemento = function (valor) {
        let atual = inicio
        let indice = 0
        while (atual) {
            if (atual.valor === valor) {
                return indice
            }
            atual = atual.proximo
            indice++
        }
        return -1
    }

    // -------------------------
    // e) Remover um elemento de uma posição específica (0-based)
    this.removerNaPosicao = function (posicao) {
        if (posicao < 0 || posicao >= tamanho || inicio === null) {
            return 'Posição inválida'
        }

        if (posicao === 0) {
            return this.removerPrimeiro()
        }

        let atual = inicio
        let anterior = null
        let indice = 0

        while (indice < posicao) {
            anterior = atual
            atual = atual.proximo
            indice++
        }

        anterior.proximo = atual.proximo
        tamanho--
        return 'Elemento removido: ' + atual.valor
    }

    // Função auxiliar: tamanho da lista
    this.tamanho = function () {
        return tamanho
    }
}

// -------------------------
// Programa principal
// -------------------------
let lista = new ListaEncadeada()

// Inserindo elementos iniciais com base no modelo original
lista.inserirNoInicio(40)
lista.inserirNoInicio(30)
lista.inserirNoInicio(20)
lista.inserirNoInicio(10)

// a) Mostrar todos os elementos
console.log('a) Mostrar todos os elementos da lista:')
console.log(lista.mostrarTodos())
console.log('------------------------')

// b) Remover o primeiro elemento
console.log('b) Remover o primeiro elemento da lista:')
console.log(lista.removerPrimeiro())
console.log('Lista agora:', lista.mostrarTodos())
console.log('------------------------')

// c) Inserir um elemento no início da lista
console.log('c) Inserir um elemento no início da lista:')
lista.inserirNoInicio(10)
console.log('Lista agora:', lista.mostrarTodos())
console.log('------------------------')

// d) Retornar a posição do elemento na lista
console.log('d) Retornar a posição do elemento:')
console.log('Posição do elemento 10:', lista.posicaoDoElemento(10))
console.log('Posição do elemento 40:', lista.posicaoDoElemento(40))
console.log('Posição do elemento 50 (não existe):', lista.posicaoDoElemento(50))
console.log('------------------------')

// e) Remover um elemento de uma posição específica
console.log('e) Remover um elemento de uma posição específica:')
console.log(lista.removerNaPosicao(3)) // remove a posição 3
console.log('Lista agora:', lista.mostrarTodos())
console.log('------------------------')

