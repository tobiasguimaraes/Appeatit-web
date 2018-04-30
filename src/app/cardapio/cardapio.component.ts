import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        let navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.add('navbar-hidden');
  }

}
