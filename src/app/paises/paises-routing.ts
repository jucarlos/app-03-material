import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallPaisComponent } from './pages/detall-pais/detall-pais.component';
import { ListadoPaisesComponent } from './pages/listado-paises/listado-paises.component';


const routes: Routes = [

    {
        path: '',
        children: [
            {
                path: 'listado',
                component: ListadoPaisesComponent
            },
            {
                path: 'verpais/:id',
                component: DetallPaisComponent
            },
            {
                path: '**',
                redirectTo: 'listado'
            }
        ]
    }

];



@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule ]
})
export class PaisesRoutingModule { }