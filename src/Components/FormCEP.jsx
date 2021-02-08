import React from 'react';
import InputMask from 'react-input-mask'
import Button from './Button';
import './FormCEP.css'

function FormCEP(props) {
    return (
        <div className="FormCEP">
            <label htmlFor="cep">Digite o seu CEP</label>
            <InputMask mask="99999-999" name="cep" id="cep" onChange={props.onChange} value={props.value} placeholder="00000-000" />
            <Button onClick={props.onClick} nomeBotao="Buscar" desativarBotao={props.desativarBotao} />
        </div>
    )
}

export default FormCEP