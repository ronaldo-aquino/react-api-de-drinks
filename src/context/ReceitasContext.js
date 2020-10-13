import React, { createContext, useState } from 'react'

export const ReceitasContext = createContext();

const ReceitasProvider = (props) => {

    const [receitas, setReceitas] = useState([])

    const [buscaReceita, setBuscaReceita] = useState({
        nome: '',
        categoria: '',
    })

    return(
        <ReceitasContext.Provider value={{
            setBuscaReceita
        }}>
            {props.children}
        </ReceitasContext.Provider>
    )
}

export default ReceitasProvider