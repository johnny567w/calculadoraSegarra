import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OperacionesComponent } from './components/operaciones/operaciones.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path: 'pages/inicio',
        component: HomeComponent
      },
      {
        path: 'pages/agregartareas',
        component: OperacionesComponent
      },
      {
        path: 'pages/listatareas',
        component: OperacionesComponent
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], /*<!-- esto es para que se habran las paginas> */
  exports: [RouterModule]
})
export class AppRoutingModule { }