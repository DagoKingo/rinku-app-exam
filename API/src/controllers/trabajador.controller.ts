import Controller from './controller';
import Trabajador from "../models/trabajador.model";

class TrabajadorController extends Controller {
    async get(){
        const model = new Trabajador();
        return model.get();
    }

    async store(nombre: string, numero: string, id_tipo: number){
        const model = new Trabajador(nombre, numero, id_tipo);
        return model.store();
    }

    async storePago(id_trabajador: number, id_mes: number, entregas: number){
        const model = new Trabajador();
        model.id = id_trabajador;
        return model.storePayment(id_mes, entregas);
    }

    async getRoles(){
        const model = new Trabajador();
        return model.getRoles();
    }

    async getPagos(id_trabajador: number){
        const model = new Trabajador();
        model.id = id_trabajador;
        return model.getPayments();
    }
}

export default TrabajadorController;