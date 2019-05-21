import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  regulamento(){
    this.router.navigateByUrl('regulamento')
  }

  equipes(){
    this.router.navigateByUrl('equipes')
  }

  resultados(){
    this.router.navigateByUrl('resultados')
  }

}
