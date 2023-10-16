interface Product {
  nome: string
  preco: number
  descricao: string
  garantia: string
  seguroAcidentes: boolean
  empresaFabricante: Empresa
  empresaMontadora: Empresa
}

interface Empresa {
  nome: string
  fundacao: number
  pais: string
}

const fetchProduct = async () => {
  const response = await fetch("https://api.origamid.dev/json/notebook.json")
  const data = await response.json()
  showProduct(data)
}

fetchProduct()

const showProduct = (data: Product) => {
  const hasAccidentInsurance = data.seguroAcidentes ? "sim" : "não"

  document.body.innerHTML += `
    <div>
      <h2>${data.nome}</h2>
      <br />R$ ${data.preco}
      <br />${data.descricao}
      <br />Garantia: ${data.garantia}
      <div>Tem seguro acidente? ${hasAccidentInsurance}</div>
      <div>Empresa fabricante: ${data.empresaFabricante.nome}</div>
    </div>
  `
}
