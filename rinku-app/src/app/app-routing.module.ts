import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';
import { RegistroComponent } from './registro/registro.component';
import { CapturaComponent } from './captura/captura.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'trabajadores',
    pathMatch: 'full',
  },
  {
    path: 'trabajadores',
    component: TrabajadoresComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'captura',
    component: CapturaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
