let notas = [];
let soma = 0;
let mensagem = "";
const quantidadesnotas = 4;
 
let nome = prompt("Digite seu nome:");
 
for (let i = 1; i <= quantidadesnotas; i++) {
    let nota = parseFloat(prompt(`Digite a Nota ${i}:`));
    notas.push(nota);
    soma += nota;
}
 
let media = soma / quantidadesnotas;
mensagem = `O aluno ${nome} obteve as notas: ${notas.join(", ")}. A média é: ${media.toFixed(2)}`;
// .join  une todos os elementos de um array em uma única string, com a flexibilidade de escolher o separador desejado.
 
alert(mensagem);