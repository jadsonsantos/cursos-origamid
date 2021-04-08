// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar() {
//         console.log(this.nome + ' andou');
//     }
// }

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.andar = function() {
        console.log(this.nome + ' andou');
    }
}

const jadson = new Pessoa('Jadson', 27);
jadson.andar();



// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(el) {
    const element = document.querySelectorAll(el);

    this.addClass = function(classe) {
        element.forEach((el) => {
            el.classList.add(classe);
        });
    }

    this.removeClass = function(classe) {
        element.forEach((el) => {
            el.classList.remove(classe);
        })
    }
}

const li = new Dom('li');
li.addClass('ativo')