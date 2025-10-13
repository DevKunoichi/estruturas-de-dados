function LinkedList() {
    let Node = function (element) {
        this.element = element
        this.next = null
    }
    
    let length = 0
    let head = null

    this.append = function (element) {
        let node = new Node(element), current
        if (head === null) {
            head = node
        } else {
            current = head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        length++
    }

    this.size1 = function () {
        return length
    }

    this.size2 = function () {
        let cont = 0
        let current = head
        while (current) {
            current = current.next
            cont++
        }
        return cont
    }

    this.toString = function () {
        let current = head
        let string = ''
        while (current) {
            string += current.element + (current.next ? ' -> ' : '')
            current = current.next
        }
        return string
    }
}

// Programa principal
let lista = new LinkedList()
lista.append(10)
lista.append(12)
console.log(lista.size1())
console.log(lista.size2())
console.log(lista.toString())
console.log('------------------------')

lista.append(2)
lista.append(4)
console.log(lista.size1())
console.log(lista.size2())
console.log('Lista', lista.toString())
console.log('------------------------')


