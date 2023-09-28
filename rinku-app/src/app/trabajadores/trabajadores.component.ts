import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrabajadorService } from "src/app/services/trabajador.service";
import ITrabajador from '../interfaces/ITrabajador';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.scss']
})
export class TrabajadoresComponent implements OnInit, OnDestroy {
  workers: ITrabajador[] = [];
  selectedWorker: ITrabajador = {};
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

  getPagos(worker: ITrabajador){
    this.selectedWorker = worker;
    this.subscription$ = this.service.getPagos(this.selectedWorker.id!).subscribe({
      next: (result: any) => {
        if (result.success) {
          this.selectedWorker.pagos = result.data;
        } else {
          alert(result.message);
        }
      }, error: (err: any) => {
        alert(err.message);
      }
    });
  }

  trabajadorTienePagos(){
    if (this.selectedWorker.pagos!.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
