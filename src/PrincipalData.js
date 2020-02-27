import { extendObservable, computed } from 'mobx';

class PrincipalData{
	constructor(){
		extendObservable(this,
			{numero:0});
	}

	aumentar(){
		this.numero = this.numero + 1;
	}

	disminuir(){
		this.numero = this.numero - 1;
	}
}

var VarPrincipalData = new PrincipalData;

export default VarPrincipalData;