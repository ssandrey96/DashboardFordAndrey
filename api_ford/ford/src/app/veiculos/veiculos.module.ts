import { CardComponent } from './../componentes/card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { ListaVeiculosComponent } from './lista-veiculos/lista-veiculos.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { CardModule } from '../componentes/card/card.module';
import { GradeCartoesComponent } from './grade-cartoes/grade-cartoes.component';
import { DetalhesComponent } from '../detalhes/detalhes.component';


@NgModule({
  declarations: [
    ListaVeiculosComponent,
    VeiculoComponent,
    GradeCartoesComponent,
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    CardModule,
  ],
})
export class VeiculosModule { }
