import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

// Criar Context
export const ModalContext = createContext()

const ModalProvider = (props) => {

    // Estado do provider
    const [ idReceita, setIdReceita ] = useState(null)


    return (
        <ModalContext.Provider value={{setIdReceita}}>
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider