// crie 4 li's na pagina
// utilizando o for...of, adicione uma classe a cada li

const itens = document.querySelectorAll('li');

for (const item of itens) {
  item.classList.add('item')
}

// Utilize o for...in para listar todas as propriedades e valores do objeto window

for (const item in window) {
  console.log(`${item}: ${window[item]}`);
}