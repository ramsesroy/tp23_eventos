window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo');
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let inputTitle = document.querySelector('#titulo');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', function(){
        titulo.style.color = "#00b7ff";
    })

    let estadoSecreto = 0;
    
    inputTitle.addEventListener("keyup", (e) => {
         switch (true) {
             case estadoSecreto == 0:
                 e.key == "s" ? ++estadoSecreto : estadoSecreto = 0;
                 break;
             case estadoSecreto == 1:
                 e.key == "e" ? ++estadoSecreto : estadoSecreto = 0;
                 break;
             case estadoSecreto == 2:
                 e.key == "c" ? ++estadoSecreto : estadoSecreto = 0;
                 break;
             case estadoSecreto == 3:
                 e.key == "r" ? ++estadoSecreto : estadoSecreto = 0;
                 break;
             case estadoSecreto == 4:
                 e.key == "e" ? ++estadoSecreto : estadoSecreto = 0;
                 break;
             case estadoSecreto == 5:
                 e.key == "t" ? ++estadoSecreto : estadoSecreto = 0;
                 break;
             case estadoSecreto == 6:
                 e.key == "o" ? alert("¡SECRETO MAGICO!") : estadoSecreto = 0;
                 break;
             default:
                 break;
        }
    });
}