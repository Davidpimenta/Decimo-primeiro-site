const peça = document.querySelectorAll('.peça')
let dice = []
var vez_do_jogador = document.getElementById('jogador')
var cont = 1
var jg = false  
var topo = []
var meio = []
var baixo = []
var diaga = []
var diagob = []
var coluna_A = []
var coluna_B = []
var coluna_C = []
var rec = false
var recomeçar = document.getElementById('recomeçar')
var partida = true
let posibilidades = [topo, meio, baixo] 
var ganhoux = true
var ganhouy = true
var janela = document.getElementById('janela')
var começar = document.getElementById('começar')
começar.addEventListener('click', começou)
recomeçar.addEventListener('click', recomeço)

function recomeço(){
    dice = []
    topo = []
    meio = []
    baixo = []
    diaga = []
    diagob = []
    coluna_A = []
    coluna_B = []
    coluna_C = []
    partida = true
    vez_do_jogador.innerText = 'Vez do jogador X'
    jg = true
    rec = true
    peça.forEach((pec) =>{
        pec.style.border = '2px solid black'
        pec.style.backgroundImage = 'none';
        pec.style.backgroundColor = 'var(--cor2)'
        pec.style.transitionDuration = '0.5s'
    })
}

function começou(){
    vez_do_jogador.style.display = 'inline-block'
    começar.style.display = 'none'
    recomeçar.style.display = 'inline-block'

    if (cont == 1){
        jg = true
        cont++
    }

    if(jg == true){
        vez_do_jogador.innerText = 'Vez do jogador X'
    }

    
    peça.forEach((pec, indice) => {
        pec.addEventListener('mouseenter', function passar(){
            if(partida == true){
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
            }
        })

        pec.addEventListener('mouseout', function sair(){
            if(partida == true){
                if(dice.indexOf(indice) === -1){
                    pec.style.border = '2px solid black'
                    pec.style.backgroundImage = 'none';
                    pec.style.backgroundColor = 'var(--cor2)'
                    pec.style.transitionDuration = '0.5s'
                }
            }
        })


        pec.addEventListener('click', function jogou(){
            if(partida == true){
                if(dice.indexOf(indice) === -1){
                    if(jg == true){
                        pec.style.backgroundImage = 'url("x.webp")';
                        jg = false
                        vez_do_jogador.innerText = 'Vez do jogador O'
                        if(indice == 0 || indice == 1 || indice == 2){
                            topo.push(0)
                        }
                        if(indice == 3 || indice == 4 || indice == 5){
                            meio.push(0)
                        }
                        if(indice == 6 || indice == 7 || indice == 8){
                            baixo.push(0)
                        }

                        if(indice == 0){
                            diaga.push(0)
                        }

                        if(indice == 4){
                            diaga.push(0)
                        }

                        if(indice == 8){
                            diaga.push(0)
                        }

                        if(indice == 2){
                            diagob.push(0)
                        }

                        if(indice == 4){
                            diagob.push(0)
                        }

                        if(indice == 6){
                            diagob.push(0)

                        }
                        
                        if(indice == 0){
                            coluna_A.push(0)
                        }

                        if(indice == 3){
                            coluna_A.push(0)
                        }

                        if(indice == 6){
                            coluna_A.push(0)
                        }

                        if(indice == 1){
                            coluna_B.push(0)
                        }

                        if(indice == 4){
                            coluna_B.push(0)
                        }

                        if(indice == 7){
                            coluna_B.push(0)
                        }

                        if(indice == 2){
                            coluna_C.push(0)
                        }

                        if(indice == 5){
                            coluna_C.push(0)
                        }

                        if(indice == 8){
                            coluna_C.push(0)
                        }

                    } else {
                        pec.style.backgroundImage = 'url("circulo.png")';
                        jg = true
                        vez_do_jogador.innerText = 'Vez do jogador X'
                        if(indice == 0 || indice == 1 || indice == 2){
                            topo.push(1)
                        }
                        if(indice == 3 || indice == 4 || indice == 5){
                            meio.push(1)
                        }
                        if(indice == 6 || indice == 7 || indice == 8){
                            baixo.push(1)
                        }
 
                        if(indice == 0){
                            diaga.push(1)
                        }

                        if(indice == 4){
                            diaga.push(1)
                        }

                        if(indice == 8){
                            diaga.push(1)
                        }

                        if(indice == 2){
                            diagob.push(1)
                        }

                        if(indice == 4){
                            diagob.push(1)
                        }

                        if(indice == 6){
                            diagob.push(1)
                        }

                        if(indice == 0){
                            coluna_A.push(1)
                        }

                        if(indice == 3){
                            coluna_A.push(1)
                        }

                        if(indice == 6){
                            coluna_A.push(1)
                        }

                        if(indice == 1){
                            coluna_B.push(1)
                        }

                        if(indice == 4){
                            coluna_B.push(1)
                        }

                        if(indice == 7){
                            coluna_B.push(1)
                        }

                        if(indice == 2){
                            coluna_C.push(1)
                        }

                        if(indice == 5){
                            coluna_C.push(1)
                        }

                        if(indice == 8){
                            coluna_C.push(1)
                        }

                    }
                    dice.push(indice)
                    ganhar()
                    if(dice.length == 9 && partida == true){
                        vez_do_jogador.innerText = 'O jogo empatou'
                    } 
                }
            }
        })
    })
}


function ganhar(){
    var contA = 0
    let posibilidades = [topo, meio, baixo, diaga, diagob, coluna_A, coluna_B, coluna_C] 

    posibilidades.forEach((posição) => {
        while(contA< 3){
            ganhoux = true
            if(posição.length == 3){
                if(posição[contA] != 0){
                    ganhoux = false
                    
    
                }
            }
            if(ganhoux == false){
                break
            }
            contA++
        }
        contA = 0
        if(ganhoux == true && posição.length == 3){
            vez_do_jogador.innerText = 'Jogador X ganhou'
            partida = false
        }
        
        //Ganhar Y

        while(contA< 3){
            ganhouy = true
            if(posição.length == 3){
                if(posição[contA] != 1){
                    ganhouy = false
        
                }
            }
            if(ganhouy == false){
                break
            }
            contA++
        }
        contA = 0
        if(ganhouy == true && posição.length == 3){
            vez_do_jogador.innerText = 'Jogador O ganhou'
            partida = false
        }

    })
}