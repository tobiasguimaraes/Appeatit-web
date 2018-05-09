import { Component, OnInit } from '@angular/core';
import { ReceitasService } from '../services/receitas/receitas.service';
import { Receita } from '../models/receita';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {

  public receitas: Array<Receita>

  constructor(private receitaService: ReceitasService) { }

  ngOnInit() {
        const navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.add('navbar-hidden');
        this.getReceitas();
  }

  getReceitas() {
    this.receitaService.getReceitas().subscribe(
      res => {
        console.log(res);
        this.receitas = res;
      },
      err => {
        console.log(err);
      },
      () => console.log('Receitas get operation complete')
    );
  }

}
