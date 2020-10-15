import React from "react";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
const Receita = ({ receita }) => {
    // Extrair os valores do context
    const { setIdReceita } = useContext(ModalContext);

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <div className="card-header">{receita.strDrink}</div>
                <img
                    src={receita.strDrinkThumb}
                    alt={`Imagem de ${receita.strDrink}`}
                    className="card-img-top"
                />

                <div className="card-body">
                    <button className="btn btn-block btn-primary" onClick={() => {
                        setIdReceita(receita.idDrink)
                    }}>
                        Ver Receita
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Receita;
