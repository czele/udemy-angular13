import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalCotacaoComponent } from './../utils/modal-cotacao.component';
import { DataBrPipe } from './../pipes/data-br.pipe';
import { NumeroDirective } from './../directives/numero.directive';
import { ConversorService } from './../services/conversor.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorComponent } from './conversor.component';
import { MoedaService } from './../services/moeda.service';

describe('ConversorComponent', () => {
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ConversorComponent,
        NumeroDirective,
        DataBrPipe,
        ModalCotacaoComponent
       ],
       providers: [
        MoedaService,
        ConversorService
       ],
       imports: [
        FormsModule,
        HttpClient
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
