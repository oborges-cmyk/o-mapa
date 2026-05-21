//1. Selecionamos todos os botões de avanc=çar e voltar
const botoes=document.querySelectorAll('.btn-proximo', '.btn-voltar');


botoes.forEach(botao =>{ 
    botao.addEventListener('click',() =>{
        const proximoPassoId=botao.getAttribute('data-proximo') || botao.getAttribute('data-voltar');

        trocarDePasso(proximoPassoId);
 });
});


avanca.forEach(button =>{ 
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})