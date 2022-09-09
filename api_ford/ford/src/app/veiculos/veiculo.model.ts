
export interface Veiculos extends Array<Veiculo> {
  vehicles: any;
}

export interface Veiculo{
  id: number;
  vehicle: string;
  volumetotal: number;
  connected: number;
  softwareUpdates: number;
}


export interface VeiculosAPI {
  vehicles: Veiculos;
}

// export type Veiculos = Array<Veiculo>;
