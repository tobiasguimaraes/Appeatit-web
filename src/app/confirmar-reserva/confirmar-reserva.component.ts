import { Component, OnInit } from '@angular/core';
import { Reserva } from '../models/reserva';
import { ActivatedRoute } from '@angular/router';
import { ReceitasService } from '../services/receitas/receitas.service';
import { Receita } from '../models/receita';
import { ReservasService } from '../services/reservas/reservas.service';

@Component({
  selector: 'app-confirmar-reserva',
  templateUrl: './confirmar-reserva.component.html',
  styleUrls: ['./confirmar-reserva.component.scss']
})
export class ConfirmarReservaComponent implements OnInit {

  public reserva = new Reserva();
  public receita: Receita;
  public idReceita;
  public titulo: string;
  public text: string;
  public type: string;

  constructor(private route: ActivatedRoute, private receitaService: ReceitasService, private reservasService: ReservasService) { }

  ngOnInit() {
    const navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    navbar.classList.add('navbar-hidden');
    this.route.params.subscribe(res => {
      this.idReceita = res['id'];
      this.reserva.receita = this.idReceita;
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


  confirmarReserva(success: any, erro: any) {
    console.log(this.reserva)
    // public nome: string;
    // public email: string;
    // public telefone: string;
    // public qtdPessoas: number;
    if (this.reserva.nome == null || this.reserva.email == null || this.reserva.telefone == null || this.reserva.qtdPessoas == null) {
      erro.show();
    }else {
      this.reservasService.novaReserva(this.reserva).subscribe(
        res => {
          this.text = 'CONFIRMOU A BOSTA, ESPERA NOIZ LIGAR';
          this.type = 'success';
          this.titulo = 'DALHE PORRA APPEATIT CARALHO BOSTA MERDA NENHUMA';
          this.receita = res;
          success.show();
        },
        error => {
          console.log(error);
        });
    }
  }

}
