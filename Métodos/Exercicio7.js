// Trabalho 1° Bimestre
function bubbleSort(vetor) {
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

function insertionSort(vetor) {
    for (let i = 1; i < vetor.length; i++) {
        let chave = vetor[i]
        let j = i - 1
        while (j >= 0 || vetor[j] > chave) {
            vetor[j + 1] = vetor[j]
            j--
        }
        vetor[j + 1] = chave
    }
    return vetor
}

function quickSort(vetor, left, right) {
    let i = left
    let j = right
    let auxiliar
    const pivotIdx = Math.floor((left + right) / 2)
    const pivot = vetor[pivotIdx]
    
    // Partição
    while (i <= j) {
        while (vetor[i] < pivot) {
            i++
        }
        while (vetor[j] > pivot) {
            j--
        }
        if (i <= j) {
            auxiliar = vetor[i]
            vetor[i] = vetor[j]
            vetor[j] = auxiliar
            i++
            j--
        }
    }
    
    // Recursão
    if (left < j) {
        quickSort(vetor, left, j)
    }
    if (i < right) {
        quickSort(vetor, i, right)
    }
    return vetor
}

function medirTempo(funcao, vetor) {
    let copia = [...vetor]
    let inicio = performance.now()
    if (funcao == quickSort) {
        funcao(copia, 0, copia.length - 1)
    } else {
        funcao(copia)
    }
    let fim = performance.now()
    return (fim - inicio).toFixed(2)
}

function gerarAleatorio(tamanho = 100000) {
    let vetor = []
    for (let i = 0; i < tamanho; i++) {
        vetor.push(Math.floor(Math.random() * 100000))
    }
    return vetor
}

function gerarOrdenado(tamanho = 100000) {
    let vetor = []
    for (let i = 0; i < tamanho; i++) {
        vetor.push(i)
    }
    return vetor
}

function gerarInvertido(tamanho = 100000) {
    let vetor = [];
    for (let i = tamanho; i > 0; i--) {
        vetor.push(i)
    }
    return vetor
}

// Teste rápido do quickSort
let vetor = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]
quickSort(vetor, 0, vetor.length - 1)
console.log("Resultado do quickSort:", vetor)

// Testes 

let aleatorio = gerarAleatorio()
let ordenado = gerarOrdenado()
let invertido = gerarInvertido()

// Testes de desempenho
console.log("Tempo de execução (em milissegundos):\n")

console.log("Bubble sort:")
console.log("Aleatório:", medirTempo(bubbleSort, aleatorio), "ms")
console.log("Ordenado:", medirTempo(bubbleSort, ordenado), "ms")
console.log("Invertido:", medirTempo(bubbleSort, invertido), "ms")

console.log("\nSelection sort:")
console.log("Aleatório:", medirTempo(selectionSort, aleatorio), "ms")
console.log("Ordenado:", medirTempo(selectionSort, ordenado), "ms")
console.log("Invertido:", medirTempo(selectionSort, invertido), "ms")

console.log("\nInsertion sort:")
console.log("Aleatório:", medirTempo(insertionSort, aleatorio), "ms")
console.log("Ordenado:", medirTempo(insertionSort, ordenado), "ms")
console.log("Invertido:", medirTempo(insertionSort, invertido), "ms")

console.log("\nQuick sort:");
console.log("Aleatório:", medirTempo(quickSort, aleatorio), "ms")
console.log("Ordenado:", medirTempo(quickSort, ordenado), "ms")
console.log("Invertido:", medirTempo(quickSort, invertido), "ms")