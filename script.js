/* const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => { 
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
}) */ //código dado pela prof.

document.addEventListener("DOMContentLoaded", () => {
    const passos = document.querySelectorAll(".passo");
    const botoesProximo = document.querySelectorAll(".btn-próximo");
    const botoesVoltar = document.querySelectorAll(".btn-voltar");

    // Função para mostrar o passo atual
    function mostrarPasso(id) {
        passos.forEach((passo) => {
            passo.classList.remove("ativo");
            if (passo.id === `passo-${id}`) {
                passo.classList.add("ativo");
            }
        });
    }

    // Adicionar evento de clique nos botões "Próximo"
    botoesProximo.forEach((botao) => {
        botao.addEventListener("click", () => {
            const proximoId = botao.getAttribute("data-proximo");
            mostrarPasso(proximoId);
        });
    });

    // Adicionar evento de clique nos botões "Voltar"
    botoesVoltar.forEach((botao) => {
        botao.addEventListener("click", () => {
            const voltarId = botao.getAttribute("data-voltar");
            mostrarPasso(voltarId);
        });
    });
});

// Evento para o botão "Voltar"
document.getElementById('botaoVoltar').addEventListener('click', function() {
    // Retorna à página anterior no histórico
    window.history.back();
});
//código do Copilot IA