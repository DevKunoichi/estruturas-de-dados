// 3° Método de Inserção Direta
let vetorNumeros = [25, 57, 48, 37, 12, 92, 86, 33]

// Método de Inserção Direta aplicado direto no vetor
for (i = 1; i < vetorNumeros.length; i++) {
    let auxiliar = vetorNumeros[i]
    let j

    // Usando for no lugar do while
    for (j = i - 1; j >= 0 || vetorNumeros[j] > auxiliar; j--) {
        vetorNumeros[j + 1] = vetorNumeros[j]
    }

    vetorNumeros[j + 1] = auxiliar
}

// Exibindo o vetor ordenado
console.log("Vetor Ordenado:", vetorNumeros)

