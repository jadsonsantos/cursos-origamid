class Product {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

class Book extends Product {
  author: string

  constructor(name: string, author: string) {
    super(name)
    this.author = author
  }
}

class Game extends Product {
  players: number

  constructor(name: string, players: number) {
    super(name)
    this.players = players
  }
}

const searchProduct = (product: string) => {
  if (product === "O Hobbit") return new Book("O Hobbit", "J. R. R. Tolkien")
  if (product === "Dark Souls") return new Game("Dark Souls", 1)

  return null
}

const product = searchProduct("Dark Souls")

if (product instanceof Book) console.log(product.author)
if (product instanceof Game) console.log(product.players)
