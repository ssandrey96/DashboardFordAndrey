import { Veiculo, Veiculos } from './../veiculos/veiculo.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VeiculosService } from '../veiculos/veiculos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  veiculoId!: string;
  veiculo$!: Observable<Veiculo>;

  constructor(
    private veiculosService: VeiculosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.veiculoId = this.activatedRoute.snapshot.params[this.veiculoId];
    this.veiculo$ = this.veiculosService.buscaPorID(this.veiculoId);
  }
}
