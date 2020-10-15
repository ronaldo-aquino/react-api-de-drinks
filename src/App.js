import React from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaReceitas from "./components/ListaReceitas";
import CategoriasProvider from "./context/CategoriasContext";
import ReceitasProvider from "./context/ReceitasContext";

function App() {
    return (
        <CategoriasProvider>
            <ReceitasProvider>
                <Header />

                <div className="container mt-5">
                    <div className="row">
                        <Formulario />
                    </div>

                    <ListaReceitas />

                </div>
            </ReceitasProvider>
        </CategoriasProvider>
    );
}

export default App;
