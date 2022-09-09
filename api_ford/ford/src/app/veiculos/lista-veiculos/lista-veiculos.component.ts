import { Veiculos } from './../veiculo.model';
import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../veiculo.model';
import { VeiculosService } from '../veiculos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-veiculos',
  templateUrl: './lista-veiculos.component.html',
  styleUrls: ['./lista-veiculos.component.css']
})
export class ListaVeiculosComponent implements OnInit {
  veiculos!: Veiculos;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.veiculos = this.activatedRoute.snapshot.data['veiculos'];
    });
  }

}
