import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { CadastraComponent } from './cadastra/cadastra.component';
import { ExibirComponent } from './exibir/exibir.component';
import { HomeComponent } from './home/home.component';
import { RegulamentoComponent } from './regulamento/regulamento.component';
import { EquipesComponent } from './equipes/equipes.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { from } from 'rxjs';
import { BasqueteComponent } from './basquete/basquete.component';
import { Futebolde7Component } from './futebolde7/futebolde7.component';
import { FutsalComponent } from './futsal/futsal.component';
//import { JiuJitsuComponent } from './Fortnite/jiu-jitsu.component';
//import { NatacaoComponent } from './natacao/natacao.component';
import { QueimadaComponent } from './queimada/queimada.component';
//import { TenisDeMesaComponent } from './tenis-de-mesa/tenis-de-mesa.component';
import { VoleibolComponent } from './voleibol/voleibol.component';
//import { XadrezComponent } from './xadrez/xadrez.component';
//import { AtletismoComponent } from './atletismo/atletismo.component';

const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch: 'full'},
    {path: 'home',component: HomeComponent},
    {path: 'equipes', component: EquipesComponent},
    {path: 'cadastrar', component: CadastraComponent},
    {path: 'exibir', component: ExibirComponent},
    {path: 'regulamento', component: RegulamentoComponent,},
    {path: 'resultados',component: ResultadosComponent},
    {path: 'basquete', component: BasqueteComponent},
    {path: 'futeboldesete', component: Futebolde7Component},
    {path: 'futsal', component: FutsalComponent},
    {path: 'queimada', component: QueimadaComponent},
    {path: 'voleibol', component: VoleibolComponent},

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
