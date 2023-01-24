import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { TableComponent } from './table/table.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    NavComponent,
    HomeComponent,
    ComponentesComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule
  ],
  exports:
    [
      NavComponent,
      HomeComponent,
      ComponentesComponent,
      TableComponent,
      MatButtonModule,
      MatIconModule,
      MatTableModule,
      MatCheckboxModule
    ]
})
export class PrincipalModule { }
