import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { UsuarioService } from '../modelo/usuario.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastra',
  templateUrl: './cadastra.component.html',
  styleUrls: ['./cadastra.component.css']
})
export class CadastraComponent implements OnInit {

  usuario: Usuario;
  //usuarios: any;

  constructor(private as: UsuarioService) {
    this.usuario = new Usuario();
    //this.listaUsuario = [];
  }


  ngOnInit() {
  }

  adicionar() {
    this.as.cadastro(this.usuario).subscribe(
      res => {
        this.usuario = res;
      }
    )
  }




}
