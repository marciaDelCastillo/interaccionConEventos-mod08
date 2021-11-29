const validarEstado = (e, t)=>{
    if(e==0 && t=='s' || e==1 && t=='e' || e==2 && t=='c' || e==3 && t=='r' || e==4 && t=='e' || e==5 && t=='t' || e==6 && t=='o'){
        return true
    }else{
        return false
    }
}

window.onload = function(){
    let estadoSecreto = 0;
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let input = document.querySelector('#titulo');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener("mouseover",()=>{
        titulo.style.color = 'red';
    })
    titulo.addEventListener("mouseout",()=>{
        titulo.style.color = 'black';
    })

    input.addEventListener("keyup",(event)=>{
        console.log("letra ingresada: "+event.key);
        if(validarEstado(estadoSecreto, event.key)){
            estadoSecreto++;
            console.log("estado: "+estadoSecreto);
            
        }
        else{
            estadoSecreto = 0;
        }
        if(estadoSecreto == 7){
            alert("SECRETO MÁGICO");
            estadoSecreto = 0 ;
            input.value = '';
        }
    })

}