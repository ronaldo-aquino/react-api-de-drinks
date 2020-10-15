import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ReceitasContext = createContext();

const ReceitasProvider = (props) => {
    const [receitas, setReceitas] = useState([]);

    const [buscaReceita, setBuscaReceita] = useState({
        nome: "",
        categoria: "",
    });

    const [consultar, setConsultar] = useState(false);

    const { nome, categoria } = buscaReceita;

    useEffect(() => {
        if (consultar) {
            const getReceitas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nome}&c=${categoria}`;
                const resultado = await axios.get(url)
                setReceitas(resultado.data.drinks)
            };

            getReceitas();
        }
    }, [buscaReceita]);

    return (
        <ReceitasContext.Provider
            value={{
                setBuscaReceita,
                setConsultar,
                receitas,
            }}
        >
            {props.children}
        </ReceitasContext.Provider>
    );
};

export default ReceitasProvider;
