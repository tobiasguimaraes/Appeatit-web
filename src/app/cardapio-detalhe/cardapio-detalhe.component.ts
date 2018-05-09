import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap } from '@angular/router';
import { ReceitasService } from '../services/receitas/receitas.service';
import { Receita } from '../models/receita';
import { ReservasService } from '../services/reservas/reservas.service';


@Component({
  selector: 'app-cardapio-detalhe',
  templateUrl: './cardapio-detalhe.component.html',
  styleUrls: ['./cardapio-detalhe.component.scss']
})
export class CardapioDetalheComponent implements OnInit {

  private idReceita: string
  public receita: Receita;
  constructor(private route: ActivatedRoute, private receitaService: ReceitasService) { }

  ngOnInit() {
    const navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    navbar.classList.add('navbar-hidden');
    this.route.params.subscribe(res => {
      this.idReceita = res['id'];
    });
    this.getReceitaDetalhe()
    // this.idReceita = this.route.paramMap.get('id')
  }

  getReceitaDetalhe() {
    this.receitaService.getReceitasById(this.idReceita).subscribe(
      res => {
        console.log(res);
        this.receita = res;
      },
      error => {
        console.log(error);
      });
  }
}
