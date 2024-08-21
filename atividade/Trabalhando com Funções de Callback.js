function executaOperacao(num1, num2, operacao) {
    return operacao(num1, num2);
}
function soma(a, b) {
    return a + b;
}

function multiplicacao(a, b) {
    return a * b;
}

const resultadoSoma = executaOperacao(5, 3, soma);
console.log(`Resultado da soma: ${resultadoSoma}`);

const resultadoMultiplicacao = executaOperacao(4, 6, multiplicacao);
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);

function repetirOperacao(numero, operacao) {
    let resultado = 1;
    for (let i = 0; i < numero; i++) {
        resultado = operacao(resultado);
        console.log(`Resultado após iteração ${i + 1}: ${resultado}`);
    }
}

function adicionarCinco(valor) {
    return valor + 5;
}

repetirOperacao(5, adicionarCinco); 

function contarOcorrencias(string, caractere) {
    let count = 0;
    string.split('').forEach(char => {
        if (char === caractere) {
            count++;
        }
    });
    return count;
}
const texto = "hello world";
const caractere = 'o';
const ocorrencias = contarOcorrencias(texto, caractere);
console.log(`O caractere '${caractere}' aparece ${ocorrencias} vezes na string.`); // O ca