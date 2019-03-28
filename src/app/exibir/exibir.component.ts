import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { UsuarioService } from '../modelo/usuario.service';

@Component({
  selector: 'app-exibir',
  templateUrl: './exibir.component.html',
  styleUrls: ['./exibir.component.css']
})
export class ExibirComponent implements OnInit {
  usuario: Usuario[];

  constructor(public u: UsuarioService) { }

  ngOnInit() {
    this.usuario = this.u.obterUsuario();
  }

}
