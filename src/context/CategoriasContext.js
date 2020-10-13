import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'

// Criar context
export const CategoriasContext = createContext();

// Provider é onde se encontra as funções e estados.
const CategoriasProvider = (props) => {
    // Criar estado do Context
    const [categorias, setCategorias] = useState([]);

    // Carregar dados da API
    useEffect(() => {
        const getCategorias = async () => {
            const url =
                "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
            
                const categorias = await axios(url)
                setCategorias(categorias.data.drinks)
        };

        getCategorias();
    }, []);

    return (
        <CategoriasContext.Provider value={{categorias}}>
            {props.children}
        </CategoriasContext.Provider>
    );
};

export default CategoriasProvider;
