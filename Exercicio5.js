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

//********************************************** 

//Fibonacci
function fib (num) {
    if (num == 1 || num == 2) return 1  // (o || funciona igua o &&)
}
console.log (fib(8))

//***********************************************

//Potência
function potencia (base, expoente) {
    if (expoente == 0) 
        return 1 
    return (base * potencia (base, expoente -1))
}
var  result = potencia (5, 2)
console.log (result)

//************************************************

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

//*************************************************




