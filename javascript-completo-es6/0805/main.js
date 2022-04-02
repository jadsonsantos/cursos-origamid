// Reescreva a funcao utilizando valores iniciais de parametros com ES6

function createButton(background, color) {
  background = background || 'blue'
  if (color === undefined) {
    color = 'red'
  }

  const buttonElement = document.createElement('button');
  buttonElement.innerHTML = 'comprar';
  buttonElement.style.background = background;
  return buttonElement
}

const redButton = createButton()

document.querySelector('body').append(redButton)