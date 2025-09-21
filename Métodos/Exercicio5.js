//Fatorial
function fatorial (numero) {
    if (numero == 0) {
        return 1
    } else {
        return (numero * fatorial (numero - 1))
    }
}
result = fatorial (8)
console.log (result)

//******************************************************
//Fibonacci
function fibonacci (numero) {
    if (numero == 1 || numero == 2) {
        return 1  // (o || funciona igual o &&)
    } else {
        return fibonacci (numero - 1) + fibonacci (numero - 2)
    }
}
result = fibonacci (8)
console.log (result)

//***************************************************** 
//Potência
function potencia (base, expoente) {
    if (expoente == 0) {
        return 1 
    } else {
        return (base * potencia (base, expoente - 1))
    }    
}
result = potencia (5, 2)
console.log (result)

//***************************************************** 
//Recursão por Busca Binária
function busca (A, inicio, final, x) {
    if (inicio > final) {
        return -1
    } else {
        meio = Math.floor ((inicio + final) / 2)

        if (A[meio] == x) {
            return meio
        } else if (x < A [meio]) {
            return busca (A, inicio, meio - 1, x)
        } else {
            return busca (A, meio + 1, final, x)
        }
    }
}
//Programa Principal
numeros = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]
result = busca (numeros, 0, numeros. length - 1, 44)
console.log ("numeros = ", numeros)
console.log (result)

//*******************************************************

function hanoi (numero, origem, destino, auxiliar) {
    if (numero == 1) {
        console.log (`Mova o disco 1 de ${origem} para ${destino}`)
        return
    }
    hanoi (numero - 1, origem, auxiliar, destino)
    console.log (`Mova o disco ${numero} de ${origem} para ${destino}`)
    hanoi (numero - 1, auxiliar, destino, origem)
}
//3 discos
hanoi (3, 'A', 'C', 'B')

//******************************************************************** 
//Quick Sort
function quicksort(array, left, right) {
  let i = left
  let j = right
  let auxiliar
  const pivotIdx = Math.floor((left + right) / 2) //índice inteiro
  const pivot = array[pivotIdx] //acessar com colchetes

  //Partição
  while (i <= j) {
    while (array[i] < pivot) {
      i++
    }
    while (array[j] > pivot) {
      j--
    }
    if (i <= j) {
      auxiliar = array[i]
      array[i] = array[j]
      array[j] = auxiliar
      i++
      j--
    }
  }
  // Recursão
  if (left < j) {
    quicksort(array, left, j)
  }
  if (i < right) {
    quicksort(array, i, right)
  }
  return array
}
//Programa Principal
let vetor = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]
quicksort(vetor, 0, vetor.length - 1)
console.log(vetor) 
//(10) [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]
