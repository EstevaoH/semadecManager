import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastraComponent } from './cadastra/cadastra.component';
import { from } from 'rxjs';
import { ExibirComponent } from './exibir/exibir.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastraComponent,
    ExibirComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'cadastrar',
        component: CadastraComponent
      },
      {
        path: 'exibir',
        component: ExibirComponent
      },
      {
        path: 'home',
        component: HomeComponent,
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
