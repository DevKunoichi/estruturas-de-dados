function intercalar(vetor1, vetor2){
    let vetor3 = []

    while (vetor1.length != 0){
        vetor3.push(vetor1.shift())
        vetor3.push(vetor2.shift())
    }
        
        console.log(vetor3)
}
        
var vetor1 = [1, 3, 5, 7]
var vetor2 = [2, 4, 6, 8]

intercalar(vetor1, vetor2)

//********************************************************

    var frase = "abc xyz"
    var pilha = []
    var letra, i = 0
    var fraseInvertida = " "

    while(i < frase.length){
        while(frase[i] != " " && i < frase.length){
            pilha.push(frase[i])
            i++
        }
        while(pilha.length != 0){
            letra = pilha.pop()
            fraseInvertida += letra
        }
        fraseInvertida += " "
        i++
    }

    console.log(fraseInvertida)

