import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../modelo/usuario';

import { Observable} from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  results: Observable<any>;
  matricula: '';
  senha: '';

  constructor(public router: Router) {
   }

  ngOnInit() {
  }

  loginUser(){

    this.router.navigateByUrl('home');
    console.log(this.usuario);
  }

  cadastrarUser(){
    this.router.navigateByUrl('cadastrar');
  }

}
