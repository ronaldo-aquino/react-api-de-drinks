import React from "react";
const Receita = ({ receita }) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <div className="card-header">{receita.strDrink}</div>
            </div>
        </div>
    );
};

export default Receita;
