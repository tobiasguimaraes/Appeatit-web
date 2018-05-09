import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Receita } from '../../models/receita';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'



@Injectable()
export class ReceitasService {

  // private url = 'http://localhost:3000';
  private url = 'https://appeatit-server.herokuapp.com';

  constructor(private http: Http) { }

  getReceitas(): Observable<Receita[]> {
    return this.http.get(this.url + '/Receitas').map(res => res.json());
  }
  getReceitasById(id: string): Observable<Receita> {
    return this.http.get(this.url + '/Receitas/' + id).map(res => res.json());
  }
}
