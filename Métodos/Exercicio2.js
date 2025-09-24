//2° Método Bubblesort
let vetorNumeros = [25, 57, 48, 37, 12, 92, 86, 33]
let vetorOriginal = [...vetorNumeros]

//Algoritmo Bubblesort aplicado direto no vetor
for (let i = 0; i < vetorNumeros.length -1; i++) {
    for (let j = 0; j < vetorNumeros.length -1 -i; j++) {
        if (vetorNumeros [j] > vetorNumeros [j+1]) {
            //Troca de posição entre os dois elementos
            let temporario = vetorNumeros [j]
            vetorNumeros [j] = vetorNumeros [j+1]
            vetorNumeros [j+1] = temporario
        }
    }
}

// Exibindo o vetor original e o ordenado
console.log("Vetor Original:", vetorOriginal)
console.log("Vetor Ordenado:", vetorNumeros)

