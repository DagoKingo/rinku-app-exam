import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrabajadorService } from "src/app/services/trabajador.service";
import ITrabajador from '../interfaces/ITrabajador';

@Component({
  selector: 'app-captura',
  templateUrl: './captura.component.html',
  styleUrls: ['./captura.component.scss']
})
export class CapturaComponent implements OnInit, OnDestroy {
  worker: ITrabajador = {}
  workerFound: boolean = false;
  entregas: number = 0;
  mes: number = 0;
  workers: ITrabajador[] = [];
  subscription$: Subscription = new Subscription();
  constructor(private service: TrabajadorService){ }

  ngOnInit(): void {
    this.subscription$ = this.service.get().subscribe({
      next: (result: any) => {
        this.workers = result.data;
      }, error: (err: any) => {
        alert(err.message);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  OnEnterKeyPress(event: KeyboardEvent): void {
    if (event.keyCode == 13) {
      event.preventDefault();
      this.buscarEmpleado();
    }
  }

  clear(){
    this.worker = {}
    this.workerFound = false;
  }

  buscarEmpleado(){
    const worker = this.workers.find(worker => worker.numero == this.worker.numero);
    if (worker) {
      this.worker = worker;
      this.workerFound = true;
    } else {
      alert('No pudimos encontrar al trabajador');
    }
  }

  calcular(){
    if (this.mes == 0) {
      alert('Debes elegir un mes');
    } else {
      this.subscription$ =
        this.service
        .storePago(this.worker.id!, this.mes, this.entregas)
        .subscribe({
        next: (result: any) => {
          if (result.success){
            alert('El pago se capturó exitosamente');
            this.clear();
          } else {
            alert(result.message);
          }
        }, error: (err: any) => {
          alert(err.message);
        }
      });
    }
  }
}
