/*Crie um algoritmo que leia um vetor de 5 números inteiros e mostre-os.*/

//numeros = [1,2,3,4,5]

let num = [];
let mensagem = "";
for (let i = 0; i < 5; i+= 1) {
    num.push(prompt("Informe um número"));
}
for (let i = 0; i < num.length; i++) {
    mensagem += ` ${num [i]} \n`
}
alert(mensagem)


