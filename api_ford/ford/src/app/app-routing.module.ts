import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:'',
  pathMatch:'full',
  redirectTo:'home'
},
{
  path:'home',
  loadChildren:()=>import('./home/home.module').then((m)=>m.HomeModule) //Foi exclúido o componente Homemodule np app.module.ts, para que, através do lazyloading, fosse realizado o carregamento sob demanda.
},
{
  path:'veiculos',
  loadChildren:()=>import('./veiculos/veiculos.module').then((m)=>m.VeiculosModule),
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
