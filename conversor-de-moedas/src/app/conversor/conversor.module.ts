import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorComponent } from './components/conversor.component';
import { MoedaService } from './services/moeda.service';
import { FormsModule } from '@angular/forms';
import { ConversorService } from './services/conversor.service';
import { NumeroDirective } from './directives/numero.directive';

@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ConversorComponent,
  ],
  providers: [
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
