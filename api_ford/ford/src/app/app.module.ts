import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { RodapeModule } from './componentes/rodape/rodape.module';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalhesComponent } from './detalhes/detalhes.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AutenticacaoModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CabecalhoModule,
    RodapeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
