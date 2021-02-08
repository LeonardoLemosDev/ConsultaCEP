import React from 'react';
import Button from './Button';
import './TabelaEndereco.css'


function TabelaEndereco(props) {
    const endereco = props.dadosEndereco 
    return (
        <div className="TabelaEndereco fadeIn" hidden={props.mostratTabela}>
            <h3>End. completo: <p>{endereco.address + ", " + endereco.district + ", " + endereco.city +" - " + endereco.state }</p></h3>
            <table>
                <tbody>
                    <tr>
                        <th colSpan="4" style={{ textAlign: 'center', fontSize:'20px', fontStyle: 'italic' }}>Informações detalhadas:</th>
                    </tr>
                    <tr>
                        <th>CEP: <p>{endereco.cep}</p></th>
                        <th>Tipo: <p> {endereco.address_type} </p></th>
                    </tr>
                    <tr>
                        <th colSpan="2">Logradouro: <p>{ endereco.address_type + " " + endereco.address_name}</p></th>
                    </tr>
                    <tr>
                        <th >Bairro: <p> {endereco.district} </p> </th>
                        <th>Cidade: <p> {endereco.city} </p></th>
                    </tr>
                    <tr>
                        <th>Estado: <p> {endereco.state} </p> </th>
                        <th>DDD: <p> {endereco.ddd} </p> </th>
                    </tr>
                </tbody>
            </table>
            <Button onClick={props.onClick} nomeBotao="Finalizar"  />
        </div>
    )
}

export default TabelaEndereco