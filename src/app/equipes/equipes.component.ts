import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../modelo/usuario';
import { UsuarioService } from '../modelo/usuario.service';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {

  usuario:Usuario[];

  constructor(private us: UsuarioService) { }

  ngOnInit() {
    this.us.dados().subscribe(
      res =>{
        this.usuario = res[""];
      }
    )
  }


}




