let idade: number = 15
let nome: string = "Jadson"

console.log(`nome: ${nome}, idade: ${idade}`)

function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase()
}

console.log(normalizarTexto(" JADSON "))

class Product {
  name: string
  price: number

  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }

  precoReal() {
    return `R$ ${this.price}`
  }
}

const book = new Product("Game of Thrones", 100)
