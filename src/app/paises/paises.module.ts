import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ListadoPaisesComponent } from './pages/listado-paises/listado-paises.component';
import { DetallPaisComponent } from './pages/detall-pais/detall-pais.component';
import { PaisesRoutingModule } from './paises-routing';

// Material
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ListadoPaisesComponent,
    DetallPaisComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    MaterialModule
  ]
})
export class PaisesModule { }
