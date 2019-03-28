import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: string;
  private senha: number;


  constructor(public router: Router) {
    this.senha = this.senha;
    this.usuario = this.usuario
   }

  ngOnInit() {
  }

  loginUser(){
    
    this.router.navigateByUrl('home');
    console.log(this.usuario + this.senha);
  }

  cadastrarUser(){
    this.router.navigateByUrl('cadastrar');
  }

}
