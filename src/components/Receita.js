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
                            setIdReceita(null)
                            handleClose()
                        }}
                        
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h1>A partir do modar</h1>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Receita;
