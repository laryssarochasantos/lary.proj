document.addEventListener('DOMContentLoadedDOM' , function(){
    const  aumentafontbotao =  document.getElementById('aumentar-fonte');
    const  diminuifontebotao = document.getElementById('diminui-fonte');

    let tamanhoatualfonte = 1;

    aumentafontebotao.addEventListener('click', function(){
        tamanhoatualfonte += 0.1;
        document.body.style.fontSize = '${tamanhoatualfonte}rem'

    })

diminuifontebotao.addEventListener('click', function(){
    tamanhoatualfonte -= 0.1;
    document.body.style.fontSize = '${tamanhoatualfonte}rem'
})



})