import { useState } from "react";
import { JogoModel } from "../models/JogoModel"

import "./Jogo.css"

function Jogo(){

    const [jogo, setJogo] = useState(new JogoModel);

    return(

        <div>
            <br />
            <h2>Marcador de Truco</h2>
            <div className="container">

                <div className="jogador">

                    <p>Jogador/Dupla</p>
                    <p>Pontos</p>
                    <p>Jogos</p>
                    <button onClick={() => setJogo(NovoJogo(jogo))}>Novo Jogo</button>


                </div>
            
                <div className="jogador">

                    <p>{jogo.jogador1}</p>
                    <p>{jogo.pontuacao1}</p>
                    <p>{jogo.sets1}</p>
                    <button onClick={() => setJogo(Pontuar(jogo, 1))}>Pontuar 1</button>

                </div>

                <div className="jogador">

                    <p>{jogo.jogador2}</p>
                    <p>{jogo.pontuacao2}</p>
                    <p>{jogo.sets2}</p>
                    <button onClick={() => setJogo(Pontuar(jogo, 2))}>Pontuar 2</button>

                </div>

            </div>

            <br />
            <hr />
        </div>
        
    )
}

function Pontuar(jogo: JogoModel, duplaPontuar: number){

    let novoJogo = {...jogo}

    if(duplaPontuar == 1)
        novoJogo.pontuacao1 ++
    
    else 
        novoJogo.pontuacao2 ++
    
    if(novoJogo.pontuacao1 >= 12){
        novoJogo.pontuacao1 = 0
        novoJogo.pontuacao2 = 0
        novoJogo.sets1 ++
    }
    if(novoJogo.pontuacao2 >= 12){
        novoJogo.pontuacao1 = 0
        novoJogo.pontuacao2 = 0
        novoJogo.sets2 ++
    }
        
    if(novoJogo.sets1 > 1 || novoJogo.sets1 > 1){
        //finalizarJogo
    }

    return (novoJogo)
}

function NovoJogo(jogo: JogoModel){

    let novoJogo = {...jogo}

    novoJogo.pontuacao1 = 0;
    novoJogo.pontuacao2 = 0;
    novoJogo.sets1 = 0;
    novoJogo.sets2 = 0;

    return(novoJogo)
}

export default Jogo