// Variável que armazena o número secreto sorteado
var numero_secreto;

// Variável que conta a quantidade de tentativas feitas pelo jogador
var quantidadeTentativas;

// Inicializa o jogo logo no início, sorteando o número secreto
reiniciarJogo();

// Função chamada quando o jogador clica no botão "Chutar"
function Tentativa() {
    // Pega o valor digitado no input e transforma em número inteiro
    let numero_tentativa = parseInt(document.getElementById("tentativa").value);

    // Caso o campo esteja vazio ou seja um valor inválido (NaN)
    if (!numero_tentativa) {
        document.getElementById("Mensagem").textContent = "Não deixe a caixa de tentativas vazia, digite um número.";
    }
    // Caso o número seja menor que 0 ou maior que 100 (fora do intervalo permitido)
    else if (numero_tentativa < 0 || numero_tentativa > 100) {
        document.getElementById("Mensagem").textContent = "Numero inválido! Digite um número entre 1 e 100.";
    }
    // Caso o jogador acerte o número secreto
    else if (numero_tentativa == numero_secreto) {
        Acerto();
    }
    // Caso o jogador erre o número secreto
    else {
        Erro(numero_tentativa);
    }
}

// Função executada quando o jogador acerta
function Acerto() {
    document.getElementById("Mensagem").textContent = "Parabéns você acertou!!! Se quiser jogar novamente, um novo número foi sorteado.";
    // Reinicia o jogo automaticamente para que o jogador possa continuar
    reiniciarJogo();
}

// Função executada quando o jogador erra
function Erro(numero_tentativa) {
    // Verifica se o chute foi maior que o número secreto
    if (numero_tentativa > numero_secreto) {
        document.getElementById("Mensagem").textContent = "O número secreto é menor do que " + numero_tentativa;
    }
    // Caso contrário, o chute foi menor que o número secreto
    else {
        document.getElementById("Mensagem").textContent = "O número secreto é maior do que " + numero_tentativa;
    }

    // Incrementa o número de tentativas
    quantidadeTentativas++;
    // Atualiza a contagem de tentativas na tela
    document.getElementById("contagemTentativas").textContent = "Numero de tentativas: " + quantidadeTentativas;

    // Se o jogador atingir 10 tentativas sem acertar, o jogo reinicia
    if (quantidadeTentativas == 10) {
        document.getElementById("Mensagem").textContent = "Você não conseguiu acertar, o jogo foi reiniciado e um novo número sorteado.";
        reiniciarJogo()
    }
}

// Função que reinicia o jogo (sorteia novo número e reseta as tentativas)
function reiniciarJogo() {
    // Sorteia um número aleatório entre 0 e 100
    numero_secreto = parseInt(Math.random() * 101);
    // Zera a contagem de tentativas
    quantidadeTentativas = 0;

    // Atualiza a tela mostrando o número de tentativas inicial (0)
    document.getElementById("contagemTentativas").textContent = "Numero de tentativas: " + quantidadeTentativas;

    // Mostra no console o número sorteado (apenas para testes/debug)
    console.log(numero_secreto);
}
