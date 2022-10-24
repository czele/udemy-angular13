import { JogoDaVelhaService } from './shared/jogo-da-velha.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.jogoDaVelhaService.inicializar();
  }

  //Retorna se a tela de inívio deve ser exibida
  get showInicio(): boolean {
    return this.jogoDaVelhaService.showInicio;
  }

  //Retorna se o tabuleiro deve ser exibida
  get showTabuleiro(): boolean {
    return this.jogoDaVelhaService.showTabuleiro;
  }

  //Retorna se a tela de fim de jogo deve ser exibida


}
