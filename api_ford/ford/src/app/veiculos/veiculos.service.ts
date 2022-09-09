import { TokenService } from './../autenticacao/token.service';
import { Observable, map, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo, Veiculos, VeiculosAPI } from './veiculo.model';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(private http:HttpClient, private tokenService:TokenService) { }


  getVeiculo():Observable<Veiculos>{
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token  )
    return this.http.get<Veiculos>(`${API}/vehicle`, {
      headers
    }).pipe(
      map(response => response.vehicles),
      tap(console.log)
    );
  }

  buscaPorID(vehicle:string): Observable<Veiculo> {
    return this.http.get<Veiculo>(`${API}/vehicle/${vehicle}`);
  }
}
