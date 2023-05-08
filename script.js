alert(`Vamos trabalhar com números
 e operações matemáticas?`);
 let numberOne = prompt("Digite o 1º número.");
 let numberTwo = prompt("Digite o 2º número.");

const sum = Number (numberOne) + Number (numberTwo);
const sub = Number (numberOne) - Number (numberTwo);
const mult = Number (numberOne) * Number (numberTwo);
const div = Number (numberOne) / Number (numberTwo);
const restDiv = Number (numberOne) % Number (numberTwo);

alert(`A soma deles é ${sum}`);
alert(`A subtração deles é: ${sub}`);
alert(`A multiplicação deles é: ${(mult).toFixed(2)}`)
alert(`A divisão deles é: ${(div).toFixed(2)}`);
alert(`O restante da divisão deles é: ${(restDiv).toFixed(2)}`);



if(Number (sum) % 2 === 0) {
    alert(`A soma dos nºs é par.`)
} else{
    alert(`A soma dos nºs é ímpar.`)
}


if(Number (numberOne) === Number (numberTwo)) {
    alert(`Os nºs escolhidos são iguais.`)
} else{
    alert(`Os nºs escolhidos não são iguais.`)
}
