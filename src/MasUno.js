import React, {Component} from 'react';
import VarPrincipalData from './PrincipalData';

class MasUno extends Component{
	render(){
		return (
				<button onClick={function(){VarPrincipalData.aumentar()}}>aumentar</button>
			);
	}
}

export default MasUno;