import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { ReceitasContext } from "../context/ReceitasContext";

const Formulario = () => {
    const { categorias } = useContext(CategoriasContext);
    const { setBuscaReceita } = useContext(ReceitasContext);
    const [busca, setBusca] = useState({
        nome: "",
        categoria: "",
    });

    // Função para ler conteúdo
    const getDataReceitas = (e) => {
        setBusca({
            ...busca,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <form
                className="col-12"
                onSubmit={(e) => {
                    e.preventDefault();
                    setBuscaReceita(busca);
                }}
            >
                <fieldset className="text-center">
                    <legend>
                        Busca de bebidas por categoria ou ingredientes.
                    </legend>
                </fieldset>

                <div className="row mt-4">
                    <div className="col-md-4">
                        <input
                            name="nome"
                            className="form-control"
                            type="text"
                            placeholder="Buscar por ingredientes."
                            onChange={getDataReceitas}
                        />
                    </div>

                    <div className="col-md-4">
                        <select
                            name="categoria"
                            className="form-control"
                            onChange={getDataReceitas}
                        >
                            <option value="">-- Seleciona categoria</option>
                            {categorias.map((categoria) => (
                                <option
                                    value={categoria.strCategory}
                                    key={categoria.strCategory}
                                >
                                    {categoria.strCategory}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-4">
                        <input
                            type="submit"
                            className="btn btn-block btn-primary"
                            value="Buscar Bebidas"
                        />
                    </div>
                </div>
            </form>
        </>
    );
};

export default Formulario;
