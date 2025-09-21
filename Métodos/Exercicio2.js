//2° Método Bubblesort
let vetorNumeros = [25, 57, 48, 37, 12, 92, 86, 33]

//Algoritmo Bubblesort aplicado direto no vetor
for (i = 0; i < vetorNumeros.length -1; i++) {
    for (j = 0; j < vetorNumeros.length -1 -i; j++) {
        if (vetorNumeros [j] > vetorNumeros [j+1]) {
            //Troca de posição entre os dois elementos
            temporario = vetorNumeros [j]
            vetorNumeros [j] = vetorNumeros [j+1]
            vetorNumeros [j+1] = temporario
        }
    }
}

// Exibindo o vetor ordenado
console.log("Vetor Ordenado:", vetorNumeros)

