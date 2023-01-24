import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesComponent } from './principal/componentes/componentes.component';

import { HomeComponent } from './principal/home/home.component';

import { TableComponent } from './principal/table/table.component';

const routes: Routes = [
  {path:'componentes',component: ComponentesComponent },
  {path:'home',component: HomeComponent},
  {path:'table',component: TableComponent},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
