import React, { useState, useContext } from "react";
import { ModalContext } from "../context/ModalContext";

import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 600,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Receita = ({ receita }) => {
    // Configuração do modal do material-ui
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Extrair os valores do context
    const { setIdReceita, receitaPorId, setReceitaPorId } = useContext(
        ModalContext
    );
    const { strDrink, strInstructions, strDrinkThumb } = receitaPorId;

    // Mostrar e formatar os ingredientes
    const mostrarIngredientes = (receitaPorId) => {
        let ingredientes = [];
        for (let i = 1; i < 16; i++) {
            if (receitaPorId[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>
                        {receitaPorId[`strIngredient${i}`]}
                        {receitaPorId[`strMeasure${i}`]}
                    </li>
                );
            }
        }

        return ingredientes;
    };

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
                    <button
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            setIdReceita(receita.idDrink);
                            handleOpen();
                        }}
                    >
                        Ver Receita
                    </button>

                    <Modal
                        open={open}
                        onClose={() => {
                            setIdReceita(null);
                            setReceitaPorId({});
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{strDrink}</h2>
                            <h3 className="mt-4">Intruções</h3>
                            <p>{strInstructions}</p>
                            <img
                                src={strDrinkThumb}
                                alt=""
                                className="img-fluid my-4"
                            />
                            <h3>Ingredientes e Quantidades</h3>
                            <ul>{mostrarIngredientes(receitaPorId)}</ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Receita;
