import { Veiculos, VeiculosAPI } from './../veiculo.model';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Veiculo} from '../veiculo.model';
import { VeiculosService } from '../veiculos.service';


@Component({
  selector: 'app-grade-cartoes',
  templateUrl: './grade-cartoes.component.html',
  styleUrls: ['./grade-cartoes.component.css']
})
export class GradeCartoesComponent implements OnInit {

  // veiculo: Veiculo[] | undefined;
  public veiculos!: Observable<Veiculos>;

  @Input() veiculo!:Veiculo;


  // @Input() vehicle?:string;

  constructor(private veiculosService:VeiculosService) { }

  ngOnInit(){

    this.veiculos = this.
veiculosService.getVeiculo();
    // this.veiculosService.getVeiculo().subscribe(modelo =>
    //   this.veiculos = modelo)
      console.log(this.veiculos)

  }

}
