import React, { Component } from 'react';
import './Platillos.css';
import logo from './logo.svg';
import varTiendaController from './TiendaController';
import Ordenar from './Ordenar';

class Platillos extends Component{
    render(){
        let platillos_div = [];

        const llenarPlatillos = varTiendaController.platillos.forEach(
            (value, index) => {
                platillos_div.push(
                    <div className="list-group-item" key={index}>
                        <div clasdsName="panel-body">
                            <img role="presentation" src={logo} className="ImagenPlatillo"/>
                            <h2 className="TitlePlatillo">{value.nombre}</h2>
                            <div className="DescripcionPlatillo">
                                {value.descripcion}
                            </div>
                            <Ordenar precio={value.precio} indice={index}
                            makePedido={(indice,event)=>{varTiendaController.update(indice, event)}}/>
                        </div>
                    </div>
                )
            }
        );

        return <div className="container col-md-6">
            <div>
                <div className="panel panel-primary">
                    <div className="list-group Platillo-Menu">
                        {platillos_div}
                    </div>
                </div>
            </div>
        </div>
    };
}

export default Platillos;