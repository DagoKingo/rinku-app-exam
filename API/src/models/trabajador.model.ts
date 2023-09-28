import IRoles from "../interfaces/roles.interface";
import ITrabajador from "../interfaces/trabajador.inteface";
import Model from "./model";

class Trabajador extends Model implements ITrabajador {
    public id: number;
    public nombre: string;
    public numero: string;
    public id_tipo: number;

    constructor(nombre: string = "", numero: string = "", id_tipo: number = null) {
        super();
        this.nombre = nombre;
        this.numero = numero;
        this.id_tipo = id_tipo;
    }

    async get(): Promise<any> {
        const response = await this.executePoolQuery('CALL sp_get_trabajadores();');
        return response;
    }

    async store(): Promise<any> {
        const response = await this.executePoolQuery('CALL sp_store_trabajador(?,?,?);', [
            this.nombre,
            this.numero,
            this.id_tipo
        ]);
        return response;
    }

    async storePayment(id_mes: number, entregas: number): Promise<any> {
        const response = await this.executePoolQuery('CALL sp_store_pago(?,?,?);', [
            this.id,
            id_mes,
            entregas
        ]);
        return response;
    }

    async getPayments(): Promise<any> {
        const response = await this.executePoolQuery('CALL sp_get_pagos(?);', [
            this.id
        ]);
        return response;
    }

    async getRoles(): Promise<any> {
        const response = await this.executePoolQuery('CALL sp_get_roles();');
        return response;
    }
}

export default Trabajador;