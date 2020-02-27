import React, {Component} from 'react';
import VarPrincipalData from './PrincipalData';
import MasUno from './MasUno';
import MenosUno from './MenosUno';
import {observer} from 'mobx-react';

class Principal extends Component{
	render(){
		return(
			<div>
				<h2>Saludos desde principal</h2>
				<h2>{VarPrincipalData.numero}</h2>
				<MasUno/>
				<MenosUno/>
			</div>	
			);
	}
}

export default observer(Principal);