import ReactDOM from 'react-dom'
import React from 'react'
import PrimeiroComponente from './componentes/PrimeiroComponente'
import {CompA, CompB} from './componentes/DoisComponentes'
import  MultiElemento from './componentes/MultiElementos'
import FamiliaSilva from './componentes/FamiliaSilva'
import Famila from './componentes/Familia'
import Membro from './componentes/Membro'
import ComponenteComFuncao from './componentes/ComponenteComFuncao'


const elemento = document.getElementById("root")

//ReactDOM.render(<h1>Ola mundo novamente!</h1>, elemento)
  
ReactDOM.render(
    <ComponenteComFuncao />
    // <Famila sobrenome = 'Rabelo'>
    //     <Membro nome = 'Andre' />
    //     <Membro nome = 'Caio' />
    // </Famila>
    // <div>
    //     <PrimeiroComponente valor="Bom dia!" treino = {2**3} />
    //     <CompB />
    //     <CompA />
    // </div>
    // <div>
    //     <FamiliaSilva />
    // </div>
    
    
    ,elemento)