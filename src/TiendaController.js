import { extendObservable } from 'mobx';

class TiendaController {
    constructor(){
        extendObservable(this,
            {
                platillos: [{
                    nombre: "nombreplatillo",
                    descripcion: "desc1",
                    precio: 100,
                    cantidad: 0
                },
                {
                    nombre: "nombreplatillo2",
                    descripcion: "desc2",
                    precio: 100,
                    cantidad: 0
                },
                {
                    nombre: "nombreplatillo3",
                    descripcion: "desc3",
                    precio: 100,
                    cantidad: 0
                }]
            });
    }

    update(index, num){
        this.platillos[index].cantidad = num;
    }
}

var varTiendaController = new TiendaController();

export default varTiendaController;