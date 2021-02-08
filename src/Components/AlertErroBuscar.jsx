import React from 'react';
import './AlertErroBuscar.css'


function AlertErroBuscar(props) {
    return (
        <div className="AlertErroBuscar fadeIn" hidden={props.esconderErro}>
            <div className="alert">
                Não foi possível obter resposta para a sua solicitação.
            </div>
        </div>
    )
}

export default AlertErroBuscar