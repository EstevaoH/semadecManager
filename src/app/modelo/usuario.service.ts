import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario[];


  private url = 'http://localhost:3000/atletas';

  constructor(private http: HttpClient) { }

  dados(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  cadastro(usuario: Usuario): Observable<Usuario> {  
    return this.http.post<Usuario>(this.url, usuario);
  }


}
