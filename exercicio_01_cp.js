/*Crie um algoritmo que leia um vetor de 5 números inteiros e mostre-os.*/

//numeros = [1,2,3,4,5]

let  num = [];
num[0] = prompt("Informe o 1º Numero:");
num[1] = prompt("Informe o 2º Numero:");
num[2] = prompt("Informe o 3º Numero:");
num[3] = prompt("Informe o 4º Numero:");
num[4] = prompt("Informe o 5º Numero:");

let mensagem =
`${num[0]}, ${num[1]}, ${num[2]}, ${num[3]} e ${num[4]}.` ;

alert(mensagem)