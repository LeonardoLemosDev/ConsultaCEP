import React, { Component } from 'react';
import axios from 'axios';
import FormCEP from './FormCEP';
import TabelaEndereco from './TabelaEndereco'
import AlertErroBuscar from './AlertErroBuscar';
import './ConteudoConsulta.css'

class ConteudoConsulta extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cep: "",
            esconderTabela: true,
            esconderErro: true,
            desativarBotao: false,
            endereco: [],
        }

        this.onChange = (e) => {
            const state = Object.assign({}, this.state)
            const campo = e.target.name
            state[campo] = e.target.value
            this.setState(state)
        }
        this.finalizar = (e) => {
            this.setState({
                cep: "",
                esconderTabela: true,
                desativarBotao: false
            })
        }

        this.ErroBuscar = (e) => {
            this.setState({
                esconderErro: false
            })
        }

        this.buscar = (e) => {
            axios
                .get("https://cep.awesomeapi.com.br/json/" + this.state.cep)
                .then(data => this.setState({ endereco: data.data, esconderTabela: false, esconderErro: true, desativarBotao: true }))
                .catch(err => {
                    this.ErroBuscar()
                })
        }
    }

    render() {

        return (
            < div className="ConteudoConsulta" >
                <FormCEP onChange={this.onChange} value={this.state.cep} onClick={this.buscar} desativarBotao={this.state.desativarBotao} />
                <TabelaEndereco mostratTabela={this.state.esconderTabela} onClick={this.finalizar} dadosEndereco={this.state.endereco} />
                <AlertErroBuscar esconderErro={this.state.esconderErro} />
            </div >
        )
    }
}

export default ConteudoConsulta