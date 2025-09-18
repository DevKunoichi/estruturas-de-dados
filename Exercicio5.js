/*
function fatorial (numero) {
    if (numero == 0) {
        return 1
    }
    else {
        return (numero * fatorial (numero -1))
    }
}
var result = fatorial (8)
console.log (result)

//----------------------------------------------- 

//Fibonacci
function fib (num) {
    if (num == 1 || num == 2) return 1  // (o || funciona igua o &&)
}
console.log (fib(8))

//------------------------------------------------

//Potência
function potencia (base, expoente) {
    if (expoente == 0) 
        return 1 
    return (base * potencia (base, expoente -1))
}
var  result = potencia (5, 2)
console.log (result)

//------------------------------------------------

function busca (A, inicio, final, x) {
    var meio 
    if (inicio > final) {
        return -1
    }
    else {
        meio = Math.floor ((inicio + final) / 2)
        if (A[meio] == x)
        return meio
    else if (x < A [meio])
        return busca (A, inicio, meio-1, x)
    else
    return busca (A, meio+1, final, x)
    }
}
//Programa Principal
var numeros = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]
result = busca (numeros, 0, numeros. length-1, 44)
console.log ("numeros = ", numeros)
console.log (result)

//-------------------------------------------------

function hanoi (numero, origem, destino, auxiliar) {
    if (numero == 1) {
        console.log (`Mova o disco 1 de ${origem} para ${destino}`)
        return
    }
    hanoi (numero -1, origem, auxiliar, destino);
    console.log (`Mova o disco ${numero} de ${origem} para ${destino}`)
    hanoi (numero -1, auxiliar, destino, origem)
}
// 3 discos
hanoi (3, 'A', 'C', 'B')
*/
//---------------------------------------------------
//QUICKSORT

function quicksort (array, left, right){
    var i = left
    var j = right
    var aux
    var pivotidx = (left + right)/2
    var pivot =  parseInt (array(pivotidx.toFixed))
    //Partição
    while (i<=j){
        while (parseInt(array[i]) < pivot){
        i++
        }
    while (parseInt (array[j]) > pivot){
        j--
    }
        if (i <= j){
            aux = array [i]
            array [i] =  array [j]
            array [j] = aux
            i++
            j--
        }
    }
    // Recursão
    if (left < j){
        quicksort (array, left, j)
    }
    if (i < right){
        quicksort (array, i, right)
    }
    return array
}

//*************************************************** 
//Programa Principal
let vet = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]
quicksort (vet, 0, vet.length -1)
console.log (vet)

