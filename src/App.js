import React from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
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
                </div>
            </ReceitasProvider>
        </CategoriasProvider>
    );
}

export default App;
