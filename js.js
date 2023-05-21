const peça = document.querySelectorAll('.peça')
let dice = []
var vez_do_jogador = document.getElementById('jogador')
var jogador_x = []
var jogador_y = []
var cont = 1
var jg = false  
var janela = document.getElementById('janela')
var começar = document.getElementById('começar')
começar.addEventListener('click', começou)


function começou(){
    vez_do_jogador.style.display = 'inline-block'

    if (cont == 1){
        jg = true
        cont++
    }

    if(jg == true){
        vez_do_jogador.innerText = 'Vez do jogador X'
    }

    

    peça.forEach( (pec, indice) => {
        pec.addEventListener('mouseenter', function passar(){
            if(dice.indexOf(indice) === -1){
                if(jg == true){
                    pec.style.backgroundImage = 'url("x.webp")';
                } else {
                    pec.style.backgroundImage = 'url("circulo.png")';
                }
                pec.style.border = '2px solid white'
                pec.style.transitionDuration = '0.5s'
                pec.style.backgroundColor = 'var(--cor3)'
                pec.style.backgroundRepeat = 'no-repeat'
                pec.style.backgroundSize = '80% 80%'
                pec.style.backgroundPosition = 'center center'
            }
        })

        pec.addEventListener('mouseout', function sair(){
            if(dice.indexOf(indice) === -1){
            pec.style.border = '2px solid black'
            pec.style.backgroundImage = 'none';
            pec.style.backgroundColor = 'var(--cor2)'
            pec.style.transitionDuration = '0.5s'
            }
        })


        pec.addEventListener('click', function jogou(){
            if(dice.indexOf(indice) === -1){
                if(jg == true){
                    pec.style.backgroundImage = 'url("x.webp")';
                    jg = false
                    jogador_x.push(indice)
                    vez_do_jogador.innerText = 'Vez do jogador O'

                } else {
                    pec.style.backgroundImage = 'url("circulo.png")';
                    jg = true
                    jogador_y.push(indice)
                    vez_do_jogador.innerText = dice
                    
      
                }

                dice.push(indice)
                

                if(dice.length == 9){
                    vez_do_jogador.innerText = dice
                } 
            }
        })
    })

}