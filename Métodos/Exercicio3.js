// 3° Método de Inserção Direta
let vetorNumeros = [25, 57, 48, 37, 12, 92, 86, 33]
let vetorOriginal = [...vetorNumeros]

// Método de Inserção Direta aplicado direto no vetor
for (let i = 1; i < vetorNumeros.length; i++) {
    let auxiliar = vetorNumeros[i]
    let j 

    // Usando for no lugar do while
    for (j = i - 1; j >= 0 || vetorNumeros[j] > auxiliar; j--) {
        vetorNumeros[j + 1] = vetorNumeros[j]
        
    }

    vetorNumeros[j + 1] = auxiliar
}

// Exibindo o vetor original e o ordenado
console.log("Vetor Original:", vetorOriginal)
console.log("Vetor Ordenado:", vetorNumeros)

