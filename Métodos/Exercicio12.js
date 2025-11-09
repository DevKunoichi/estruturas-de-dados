function verificarExpressao(expressao) {
    let pilha = []

    for (let i = 0; i < expressao.length; i++) {
        let simbolo = expressao[i]

        if (simbolo === '(' || simbolo === '[' || simbolo === '{') {
            pilha.push(simbolo)
        }

        else if (simbolo === ')' || simbolo === ']' || simbolo === '}') {
            if (pilha.length === 0) {
                return "Expressão incorreta: símbolo de fechamento sem abertura."
            }

            let topo = pilha.pop()

            if (
                (simbolo === ')' && topo !== '(') ||
                (simbolo === ']' && topo !== '[') ||
                (simbolo === '}' && topo !== '{')
            ) {
                return "Expressão incorreta: símbolos fora de ordem."
            }
        }
    }
    if (pilha.length > 0) {
        return "Expressão incorreta: falta fechar símbolo."
    }
    return "Expressão correta: todos os símbolos estão balanceados."
}
console.log(verificarExpressao("(2 + 3) * [5 - {7 / (1 + 1)}]"))
console.log(verificarExpressao("(2 + 3]"))
console.log(verificarExpressao("[(3 + 2) * 5"))
console.log(verificarExpressao(")3 + 2("))