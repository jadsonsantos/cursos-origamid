// crie 4 li's na pagina
// utilizando o for...of, adicione uma classe a cada li

const itens = document.querySelectorAll('li');

for (const item of itens) {
  item.classList.add('item')
}

