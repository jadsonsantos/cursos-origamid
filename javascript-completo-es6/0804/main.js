// Extraia o bg color, color e margin do btn

const btn = document.querySelector('button');
const btnStyle = getComputedStyle(btn)

// console.log(btnStyle);

const { backgroundColor, color, margin } = btnStyle;
console.log(backgroundColor, color, margin);