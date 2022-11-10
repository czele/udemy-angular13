import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MoedaService } from '../services/moeda.service';
import { Conversao } from '../models/conversao.model';
import { ConversorService } from './../services/conversor.service';
import { ConversaoResponse } from '../models/conversao-responde.model';
import { Moeda } from '../models/moeda.model';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  moedas: Moeda[];
  conversao: Conversao;
  possuiErro: boolean;
  conversaoResponse: ConversaoResponse;

  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    //Não entendi porque é obrigatório usar o private aqui.
    private conversorService: ConversorService
  ) { }

  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }


  //Efetua a chamada para a conversão de valores
  init(): void {
    this.conversao = new Conversao('EUR', 'BRL', null);
    this.possuiErro = false;
  }

  //Efetua a chamada para a conversão dos valores
  converter(): void {
    if (this.conversaoForm.form.valid) {
      alert('Convertendo: ' + JSON.stringify(this.conversao));
    }
  }

}
