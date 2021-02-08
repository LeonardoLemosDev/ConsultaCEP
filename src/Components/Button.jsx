import React from 'react'
import './Button.css'

function Button(props) {
    return (<div className="Button"><button type="button" onClick={props.onClick} disabled={props.desativarBotao}>{props.nomeBotao}</button></div>)
}

export default Button