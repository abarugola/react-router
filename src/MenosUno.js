import React, {Component} from 'react';
import VarPrincipalData from './PrincipalData';

class MenosUno extends Component{
	render(){
		return (
				<button onClick={function(){VarPrincipalData.disminuir()}}>disminuir</button>
			);
	}
}

export default MenosUno;