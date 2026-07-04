// seleciona todos os botões
const botoes = document.querySelectorAll(".btn-próximo, .btn-voltar");
const overlayFinal = document.getElementById("overlay-final");

// adiciona clique em cada botão
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        if (botao.classList.contains("btn-final")) {
            overlayFinal.classList.add("ativo");

            setTimeout(() => {
                overlayFinal.classList.remove("ativo");

                const passoAtual = document.querySelector(".passo.ativo");
                if (passoAtual) {
                    passoAtual.classList.remove("ativo");
                }

                const primeiroPasso = document.getElementById("passo-1");
                if (primeiroPasso) {
                    primeiroPasso.classList.add("ativo");
                }
            }, 1200);

            return;
        }

        // pega o passo atual
        const passoAtual = document.querySelector(".passo.ativo");

        if (!passoAtual) return;

        // remove a classe ativo
        passoAtual.classList.remove("ativo");

        // pega o próximo passo
        const proximoPasso =
            botao.getAttribute("data-proximo") ||
            botao.getAttribute("data-voltar");

        // mostra o próximo passo
        const passoDestino = document.getElementById("passo-" + proximoPasso);

        if (passoDestino) {
            passoDestino.classList.add("ativo");
        }
    });
});