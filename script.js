let display = document.getElementById('display'); // Obtém o elemento do DOM com ID 'display' e o armazena na variável 'display'
let expression = ''; // Inicializa a variável 'expression' como uma string vazia para armazenar a expressão matemática

function appendNumber(number) {
    expression += number; // Adiciona o número passado como argumento à expressão
    display.value = expression; // Atualiza o valor do display com a nova expressão
}

function appendOperator(op) {
    expression += op; // Adiciona o operador passado como argumento à expressão
    display.value = expression; // Atualiza o valor do display com a nova expressão
}

function setOperator(op) {
    expression += ' ' + op + ' '; // Adiciona o operador com espaços ao redor à expressão
    display.value = expression; // Atualiza o valor do display com a nova expressão
}

function clearDisplay() {
    display.value = ''; // Limpa o valor do display
    expression = ''; // Limpa a expressão
}

function calculateResult() {
    try {
        let result = eval(expression.replace(/sqrt/g, 'Math.sqrt')); // Avalia a expressão, substituindo 'sqrt' por 'Math.sqrt'
        display.value = result; // Atualiza o display com o resultado
        expression = result.toString(); // Atualiza a expressão com o resultado convertido em string
    } catch (e) {
        display.value = 'Erro'; // Se ocorrer um erro durante a avaliação, exibe 'Erro'
        expression = ''; // Limpa a expressão
    }
}

