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
}
