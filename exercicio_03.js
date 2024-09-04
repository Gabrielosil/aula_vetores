let msg = " ";
let letras = [];
let cont = 0;

for (let i = 0; i < 10 ; i++) {
    let val = prompt("Informe a letra");
    letras[i] = val;
}

for (let j = 0; j < 10 ; j++) {
    let val = letras[j].toUpperCase();
    if (!(val =="A" || val =="E" || val =="I" || val =="O" || val =="U")) {
        cont++;
        msg += val + "\n";
    }
}

alert(msg + " Consoantes" + cont);

// let letras = [];
// let mensagem = "";
// let cont = 0;
 
// // Coletando 10 letras do usuário
// for (let i = 0; i < 10; i++) {
//     let val = prompt("Digite uma letra");
//     letras[i] = val;
// }
 
// // Analisando as letras coletadas
// for (let s = 0; s < 10; s++) {
//     let val = letras[s].toUpperCase();
 
//     // Verificando se a letra não é uma vogal
//     if (!(val == "A" || val == "E" || val == "I" || val == "O" || val == "U")) {
//         cont++;
//         mensagem += val + "\n"; // Adiciona a letra à mensagem
//     }
// }
 
// // Exibindo a mensagem final com as consoantes e a contagem
// alert(mensagem + "Total de consoantes: " + cont)