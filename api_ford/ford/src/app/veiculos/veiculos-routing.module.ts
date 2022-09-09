import { ListaVeiculosComponent } from './lista-veiculos/lista-veiculos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradeCartoesComponent } from './grade-cartoes/grade-cartoes.component';
import { CardComponent } from '../componentes/card/card.component';
import { DetalhesComponent } from '../detalhes/detalhes.component';

const routes: Routes = [
  {
    path:'',
    component: ListaVeiculosComponent,
  },
  {
    path: ':vehicleID',
    component: DetalhesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
