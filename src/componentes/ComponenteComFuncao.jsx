import React from 'react'

const aprovados = ['Andre', 'Joao', 'Pedro', 'Gustavo']

export default props =>{
    const gerarItens = itens =>{
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}