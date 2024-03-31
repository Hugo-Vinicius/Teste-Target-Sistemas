// Declaração de variáveis

function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;
    let soma = 0;
    
// Cálculo

    while (soma <= numero) {
        if (soma === numero) {
            return true;
        }
        soma = a + b;
        a = b;
        b = soma;
    }
    return false;
}

// Exemplo

let numero = 21; 
if (pertenceFibonacci(numero)) {
    console.log(numero + " pertence à sequência de Fibonacci.");
} else {
    console.log(numero + " não pertence à sequência de Fibonacci.");
}
