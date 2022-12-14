import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorComponent } from './components/conversor.component';
import { MoedaService } from './services/moeda.service';
import { FormsModule } from '@angular/forms';
import { ConversorService } from './services/conversor.service';
import { NumeroDirective } from './directives/numero.directive';
import { ModalCotacaoComponent } from './utils/modal-cotacao.component';
import { DataBrPipe } from './pipes/data-br.pipe';

@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent,
    DataBrPipe,
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
