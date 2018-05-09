import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomePaperComponent } from './home_paper/home_paper.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomePaperModule } from './home_paper/home_paper.module';
import { HomeComponent } from './home/home.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { ReceitasService } from './services/receitas/receitas.service';
import { Http, HttpModule } from '@angular/http';
import { CardapioDetalheComponent } from './cardapio-detalhe/cardapio-detalhe.component';
import { ConfirmarReservaComponent } from './confirmar-reserva/confirmar-reserva.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2'
import { ReservasService } from './services/reservas/reservas.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CardapioComponent,
    CardapioDetalheComponent,
    ConfirmarReservaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomePaperModule,
    HttpModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    ReceitasService,
    ReservasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
