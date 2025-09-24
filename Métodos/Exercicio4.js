// Bubble Sort
function bubblesort(vetor) {
    for (let i = 0; i < vetor.length - 1; i++) {
        for (let j = 0; j < vetor.length - 1 - i; j++) {
            if (vetor[j] > vetor[j + 1]) {
                let temporario = vetor[j]
                vetor[j] = vetor[j + 1]
                vetor[j + 1] = temporario
            }
        }
    }
    return vetor
}

// Selection Sort
function selectionSort(vetor) {
    for (let i = 0; i < vetor.length - 1; i++) {
        let menor = i
        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[j] < vetor[menor]) {
                menor = j
            }
        }
        if (menor !== i) {
            let temporario = vetor[i]
            vetor[i] = vetor[menor]
            vetor[menor] = temporario
        }
    }
    return vetor
}

// Insertion Sort
function insertionSort(vetor) {
    for (let i = 1; i < vetor.length; i++) {
        let chave = vetor[i]
        j = i - 1
        while (j >= 0 || vetor[j] > chave) {
            vetor[j + 1] = vetor[j]
            j--
        }
        vetor[j + 1] = chave
    }
    return vetor
}

// Medir tempo de execução de uma função de ordenação
function medirTempo(funcao, vetor) {
    let copia = [... vetor] // Clona o vetor para não alterar o original
    let inicio = performance.now()
    funcao(copia)
    let fim = performance.now()
    return Math.round(fim - inicio) // Retorna o tempo em milissegundos
}

// Geração de vetores
function gerarAleatorio(tamanho = 1000) {
    let vetor = []
    for (let i = 0; i < tamanho; i++) {
        vetor.push(Math.floor(Math.random() * 1000)) // Valores de 0 a 999
    }
    return vetor
}

function gerarOrdenado(tamanho = 1000) {
    let vetor = []
    for (let i = 0; i < tamanho; i++) {
        vetor.push(i)
    }
    return vetor
}

function gerarInvertido(tamanho = 1000) {
    let vetor = []
    for (let i = tamanho; i > 0; i--) {
        vetor.push(i)
    }
    return vetor
}

// Gera vetores de teste
let aleatorio = gerarAleatorio()
let ordenado = gerarOrdenado()
let invertido = gerarInvertido()

// Testes de desempenho
console.log("Tempo de execução (em milissegundos):\n")

console.log("Bubble Sort:")
console.log("Aleatório:", medirTempo(bubblesort, aleatorio), "ms")
console.log("Ordenado:", medirTempo(bubblesort, ordenado), "ms")
console.log("Invertido:", medirTempo(bubblesort, invertido), "ms")

console.log("\n Selection Sort:")
console.log("Aleatório:", medirTempo(selectionSort, aleatorio), "ms")
console.log("Ordenado:", medirTempo(selectionSort, ordenado), "ms")
console.log("Invertido:", medirTempo(selectionSort, invertido), "ms")

console.log("\n Insertion Sort:")
console.log("Aleatório:", medirTempo(insertionSort, aleatorio), "ms")
console.log("Ordenado:", medirTempo(insertionSort, ordenado), "ms")
console.log("Invertido:", medirTempo(insertionSort, invertido), "ms")





