// seleciona todos os botões
const botoes = document.querySelectorAll(".btn-próximo, .btn-voltar");

// adiciona clique em cada botão
botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        // pega o passo atual
        const passoAtual = document.querySelector(".ativo");

        // remove a classe ativo
        passoAtual.classList.remove("ativo");

        // pega o próximo passo
        const proximoPasso =
            botao.getAttribute("data-proximo") ||
            botao.getAttribute("data-voltar");

        // mostra o próximo passo
        document
            .getElementById("passo-" + proximoPasso)
            .classList.add("ativo");

    });

});
// Inicializa os botões e passos
atualizarPasso();