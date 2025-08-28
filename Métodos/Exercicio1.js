//1° Método de Seleção Direta
//Vetor com os números que queremos ordenar
let vetorNumeros = [25, 57, 48, 37, 12, 92, 86, 33]

// Método de Seleção Direta aplicado direto no vetor
for (let i = 0; i < vetorNumeros.length - 1; i++) {
    let indiceMenor = i

    // Encontra o menor elemento do restante do vetor
    for (let j = i + 1; j < vetorNumeros.length; j++) {
        if (vetorNumeros[j] < vetorNumeros[indiceMenor]) {
            indiceMenor = j
        }
    }

    // Troca o menor elemento encontrado com o elemento da posição atual
    if (indiceMenor !== i) {
        let auxiliar = vetorNumeros[i]
        vetorNumeros[i] = vetorNumeros[indiceMenor]
        vetorNumeros[indiceMenor] = auxiliar
    }
}

// Exibindo o vetor ordenado
console.log("Vetor Ordenado:", vetorNumeros)


