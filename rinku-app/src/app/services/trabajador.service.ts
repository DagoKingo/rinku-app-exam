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

  getRoles(){
    return this.getRequest(this.BASE_URL+"/roles");
  }
}
