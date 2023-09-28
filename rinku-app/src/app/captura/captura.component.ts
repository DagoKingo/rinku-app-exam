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
    const sueldoSemanal = this.getSueldoSemanal();
    const pagoEntregas = (this.worker.bono_x_entrega! * this.entregas);
    const sueldoMensual = (sueldoSemanal * 4) + pagoEntregas;
    const retencionISR = this.getISR(sueldoSemanal + pagoEntregas);
    const valeDespensa = this.getValesDespensa(sueldoSemanal + pagoEntregas);

    const sueldoNeto = ((sueldoSemanal * 4) + pagoEntregas) - retencionISR + valeDespensa;
    alert(`
      \nEl pago neto del trabajador es de: ${sueldoNeto}
      \nPago Semanal: ${sueldoSemanal}
      \nBono por entregas: ${pagoEntregas}
      \nRetencion: ${retencionISR} (${sueldoMensual > 10000 ? '12' : '9'}%)
      \nVale de despensa: ${valeDespensa}
    `);
  }

  getSueldoSemanal(){
    return this.worker.sueldo_base_x_hora! * this.worker.horas_x_dia! * this.worker.dias_x_semana!;
  }

  getISR(pago:number) {
    let isr = 0;
    if (pago > 10000) {
      isr = pago * 0.12
    } else {
      isr = pago * 0.09
    }
    return isr;
  }

  getValesDespensa(pago:number){
    const vale = pago * 0.04;
    return vale;
  }
}
