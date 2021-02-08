import React, { Component } from 'react';
import './ConteudoInicio.css'
import ImgApp from '../Images/app-consulta-cep.JPG'

class ConteudoInicio extends Component {
    render() {

        return (
            <div className="ConteudoInicio">
                <h1>
                    Bem vindo ao Consulta CEP!
                </h1>
                <p>&nbsp;&nbsp;Cras in sollicitudin eros. In hac habitasse platea dictumst. Curabitur mattis elit ut dui facilisis convallis. Curabitur vulputate lacus sodales mi maximus mattis. Praesent consequat ante augue, ut efficitur lacus viverra et. Nullam fermentum vulputate nunc, et rhoncus nunc lobortis vitae. In pulvinar fringilla tempus. Vivamus eu tristique nulla.</p>
                <div className="center">
                    <img src={ImgApp} alt="Imagem do App" />
                </div>
                <p>&nbsp;&nbsp;Vivamus condimentum non lacus ac luctus. Nulla dignissim ultricies iaculis. Donec sollicitudin ante sit amet orci dignissim ornare. Fusce vel sapien a velit pretium vulputate. Mauris fermentum tellus ac dui egestas, a venenatis ante sagittis. Praesent nec tincidunt mauris. Ut eget dolor dignissim, scelerisque ante nec, eleifend magna. Etiam eget malesuada lectus. Suspendisse eget iaculis magna, eu rhoncus orci. Pellentesque venenatis nunc purus, eget mattis mauris tincidunt eget. Nulla facilisi. Aenean blandit erat quis turpis convallis commodo. Quisque iaculis dui sapien.</p>

            </div>
        )
    }
}

export default ConteudoInicio