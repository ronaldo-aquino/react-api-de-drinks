import React, { createContext, useState } from "react";

// Criar context
export const CategoriasContext = createContext();

// Provider é onde se encontra as funções e estados.
const CategoriasProvider = (props) => {
    // Criar estado do Context
    const [ola, setOla] = useState("Ola Mundo Context");

    return (
        <CategoriasContext.Provider
            value={{
                ola,
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
};

export default CategoriasProvider;
