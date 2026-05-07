const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(buttton => { 
    buttton.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})

//document.getElementById("btnIr").addEventListener("click", function() {
    //const destino = document.getElementById("sec2");
   // if (destino) {
       // window.scrollTo({
         //   top: destino.offsetTop,
        //    behavior: "smooth"
        //});
   // }
//});
