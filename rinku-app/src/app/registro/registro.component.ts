import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrabajadorService } from "src/app/services/trabajador.service";
import { Subscription } from 'rxjs';
import ITrabajador from '../interfaces/ITrabajador';
import IRoles from '../interfaces/IRoles';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit, OnDestroy{
  worker: ITrabajador = {
    nombre: "",
    numero: "",
    id_tipo: 0
  };

  roles: Array<IRoles> = [];
  subscription$: Subscription = new Subscription();
  constructor(private service: TrabajadorService){ }

  ngOnInit(): void {
    this.subscription$ = this.service.getRoles().subscribe({
      next: (result: any) => {
        this.roles = result.data;
      }, error: (err: any) => {
        alert(err.message);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  save(){
    if (!this.worker.nombre) {
      alert('Favor de ingresar el nombre');
      return;
    } else if (!this.worker.numero){
      alert('Favor de ingresar el numero de empleado');
      return;
    } else if (!this.worker.id_tipo) {
      alert('Favor de ingresar el rol del empleado')
      return;
    }

    this.subscription$ = this.service.store(this.worker).subscribe({
      next: (result: any) => {
        if (result.success) {
          alert('El empleado se registro correctamente')
        } else {
          alert(result.message);
        }
      }, error: (err: any) => {
        alert(err.message);
      }
    });
  }

  clear(){
    this.worker.nombre = undefined;
    this.worker.numero = undefined;
    this.worker.id_tipo = undefined;
  }
}
