/**
1 - Selecione os elementos com a classe link.

2 - Crie uma função que deve ser executada para cada elemento.

3 - Modificar através da função o estilo da color e border.
**/

const links = document.querySelectorAll(".link")

const styleLinks = (link: HTMLElement) => {
  link.style.color = "red"
  link.style.border = "1px solid red"
}

links.forEach((link) => {
  if (link instanceof HTMLElement) {
    styleLinks(link)
  }
})
