
import React, { Component } from 'react';

class Ordenar extends Component{
    actualizar(evento){
        this.props.makePedido(this.props.indice,evento.target.value);
    }

    render(){
        return(
            <div>
                <br/>
                <label>Cantidad: </label>
                <input onChange={this.actualizar.bind(this)} type="number" min="0" max="20"/>
                <label className="EspacioPlatillo">Precio: {this.props.precio} </label>
            </div>
        )
    }
}

export default Ordenar;