import IRoles from "./roles.interface";

interface ITrabajador {
    id?: number;
    nombre?: string;
    numero?: string;
    id_tipo?: number;
    rol?: string;

    store(): Promise<any>;
    get(): Promise<any>;
    getRoles(): Promise<any>;
}
  
  export default ITrabajador;
  