import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  private vehicleOriginal = '';

  // public id!:number;

  @Input() descricao = '';

  @Input() set vehicle(vehicle:string){
    if (vehicle.startsWith('data')){
      this.vehicleOriginal = vehicle;
    } else{
      this.vehicleOriginal = `${API}/vehicle/${vehicle}`;
    }
  }

  get vehicle(): string{
    return this.vehicleOriginal;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
