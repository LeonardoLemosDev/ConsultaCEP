import React from 'react';
import './Menu.css'

function Menu() {
    return (
        <div className="Menu">
            <a href="/">
                <img src="https://img.icons8.com/color/48/000000/marker--v1.png" width="15px" alt="" />CONSULTA CEP
            </a>
            <a href="/">Início</a>
            <a href="/consultar">Consultar</a>
            <a href="/sobre">Sobre</a>
        </div>
    )
}

export default Menu