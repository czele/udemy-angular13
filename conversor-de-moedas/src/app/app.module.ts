import { MoedaService } from './conversor/services/moeda.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversorModule } from './conversor/conversor.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConversorModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
