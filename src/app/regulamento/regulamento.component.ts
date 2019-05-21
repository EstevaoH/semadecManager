import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regulamento',
  templateUrl: './regulamento.component.html',
  styleUrls: ['./regulamento.component.css']
})
export class RegulamentoComponent implements OnInit {

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
