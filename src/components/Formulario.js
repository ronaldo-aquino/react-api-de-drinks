import React, { useContext } from "react";
import { CategoriasContext } from "../context/CategoriasContext";

const Formulario = () => {

    const { categorias } = useContext(CategoriasContext)
    console.log(categorias)
    return (
        <>
        <form className="col-12">
            <fieldset className="text-center">
                <legend>Busca de bebidas por categoria ou ingredientes.</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nome"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingredientes."
                    />
                </div>

                <div className="col-md-4">
                    <select name="categoria" className="form-control">
                        <option value="">-- Seleciona categoria</option>
                        {
                            categorias.map((categoria) => (
                            <option value={categoria.strCategory} key={categoria.strCategory}>
                                {categoria.strCategory}
                            </option>
                            ))
                        }
                    </select>
                </div>

            <div className="col-md-4">
                <input type="submit" className="btn btn-block btn-primary" value="Buscar Bebidas"/>
            </div>

            </div>
        </form>
        </>
    );
};

export default Formulario;
