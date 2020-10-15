import React, { useEffect, createContext, useState } from "react";
import axios from "axios";

// Criar Context
export const ModalContext = createContext();

const ModalProvider = (props) => {
    // Estado do provider
    const [idReceita, setIdReceita] = useState(null);
    const [receitaPorId, setReceitaPorId] = useState({})

    // Uma vez que tem uma receita com base no id, chamar a API
    useEffect(() => {
        const getReceita = async () => {
            if (!idReceita) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceita}`;
            const resultado = await axios(url);
            setReceitaPorId(resultado.data.drinks[0]);
        };

        getReceita();
    }, [idReceita]);

    return (
        <ModalContext.Provider value={{ setIdReceita, receitaPorId, setReceitaPorId }}>
            {props.children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
