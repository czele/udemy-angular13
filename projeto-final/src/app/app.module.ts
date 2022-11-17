import { JogoDaVelhaModule } from './jogo-da-velha/jogo-da-velha.module';
import { JogoDaVelhaComponent } from './jogo-da-velha/jogo-da-velha.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora/calculadora.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ConversorModule } from './conversor/conversor.module';
import { TarefasModule } from './tarefas/tarefas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CalculadoraModule,
    ConversorModule,
    TarefasModule,
    JogoDaVelhaModule,
    //O AppRoutingModule sempre tem que ser o último na ordem, seus filhos devem vir antes.
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
