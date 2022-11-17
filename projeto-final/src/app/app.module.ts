import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora/calculadora.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ConversorModule } from './conversor/conversor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CalculadoraModule,
    ConversorModule,
    //O AppRoutingModule sempre tem que ser o último na ordem, seus filhos devem vir antes.
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
