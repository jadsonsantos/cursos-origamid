// Extraia o bg color, color e margin do btn

const btn = document.querySelector('button');
const btnStyle = getComputedStyle(btn)

// console.log(btnStyle);

const { backgroundColor, color, margin } = btnStyle;
// console.log(backgroundColor, color, margin);


// Troque os valores das variaveis abaixo:

let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

console.log(cursoAtivo, cursoInativo);