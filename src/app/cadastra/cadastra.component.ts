import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { UsuarioService } from '../modelo/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastra',
  templateUrl: './cadastra.component.html',
  styleUrls: ['./cadastra.component.css']
})
export class CadastraComponent implements OnInit {

  usuario: Usuario;
  
  constructor(private as: UsuarioService, public router: Router) { 
    this.usuario = new Usuario();
    //this.listaUsuario = [];
  }
  

  ngOnInit() {
  }

  adicionar(fm){
    this.usuario = fm.value;
    this.as.adicionarUsuario(this.usuario);
    this.router.navigateByUrl('exibir');
    console.log(this.usuario);
  }


}
