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
