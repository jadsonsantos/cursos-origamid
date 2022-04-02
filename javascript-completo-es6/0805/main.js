// Reescreva a funcao utilizando valores iniciais de parametros com ES6

function createButton(background = 'blue', color = 'red') {

  const buttonElement = document.createElement('button');
  buttonElement.innerHTML = 'comprar';
  buttonElement.style.background = background;
  buttonElement.style.color = color;

  return buttonElement
}

const redButton = createButton('green', 'black')

document.querySelector('body').append(redButton)


// Utilize o metodo push para inserir as frutas ao final de comidas
const frutas = ['Banana', 'Uva', 'Morango']
const comidas = ['Pizza', 'Batata']

comidas.push(...frutas)
console.log(comidas);