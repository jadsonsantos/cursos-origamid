let idade: number = 15
let nome: string = "Jadson"

console.log(`nome: ${nome}, idade: ${idade}`)

const normalizarTexto = (texto: string) => {
  return texto.trim().toLowerCase()
}

console.log(normalizarTexto(" JADSON SANTOS "))
