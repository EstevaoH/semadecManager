import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { UsuarioService } from '../modelo/usuario.service';

@Component({
  selector: 'app-exibir',
  templateUrl: './exibir.component.html',
  styleUrls: ['./exibir.component.css']
})
export class ExibirComponent implements OnInit {
  usuario:Usuario[];

  constructor(private us: UsuarioService) { }

  ngOnInit() {
    this.us.dados().subscribe(
      res =>{
        this.usuario = res;
        console.log(res)
      }
    )
  }
}
