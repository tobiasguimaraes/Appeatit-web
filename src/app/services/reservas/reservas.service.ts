import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ReservasService {

  // private url = 'http://localhost:3000';
  private url = 'https://appeatit-server.herokuapp.com';

  constructor(private http: Http) { }

  novaReserva(body: any) {
    return this.http.post(this.url + '/ConfirmarReserva', body).map(res => res.json());
  }

}
