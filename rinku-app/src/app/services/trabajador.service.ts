import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiService } from './api.service';
import ITrabajador from '../interfaces/ITrabajador';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService extends ApiService {
  constructor(http: HttpClient) {
    super(http);
    this.BASE_URL += 'trabajadores'
  }

  get(){
    return this.getRequest(this.BASE_URL);
  }

  store(trabajador: ITrabajador){
    return this.postRequest(this.BASE_URL, trabajador);
  }

  storePago(id_trabajador: number, id_mes: number, entregas: number){
    return this.postRequest(this.BASE_URL+"/pagos", { id_trabajador, id_mes, entregas });
  }

  getRoles(){
    return this.getRequest(this.BASE_URL+"/roles");
  }

  getPagos(id_trabajador: number){
    return this.getRequest(this.BASE_URL+`/pagos?id_trabajador=${id_trabajador}`);
  }
}
