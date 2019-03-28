import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuario: Usuario[];

  constructor() { 
    this.usuario = [];
  }

  adicionarUsuario(u: Usuario): boolean{
    if(u != null){
      this.usuario.push(u);
      return true;
    }
    return false;    

  }
  obterUsuario(): Usuario[]{
    return this.usuario;

  }
}
