import React from "react";
import image from '../assets/img/doguito404.svg'
import '../assets/css/404.css'
const PaginaError404 = () =>{
    return (
        <main className="container flex flex--centro flex--coluna" >
            <img className="doguito-imagem" src={image} alt="Ilustração Doguito" srcset="" />
            <p className="naoencontrado-texto">Ops, this page not exists</p>
        </main>
    )
}

export default  PaginaError404;