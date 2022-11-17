import { JogoDaVelhaService } from './shared/jogo-da-velha.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {
  JogoDaVelhaService: any;

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
  get showFinal(): boolean {
    return this.jogoDaVelhaService.showFinal;
}

  //Inicia o jogo quando clica no botão "iniciar"
  iniciarJogo($event: any): void {
    this.jogoDaVelhaService.iniciarJogo();
  }

  //Faz a jogada, caso se clique no tabuleiro
  jogar(posX: number, posY: number): void {
    this.jogoDaVelhaService.jogar(posX, posY);
  }

  //Retonar se a peça X deve ser esibida para a coordenada informada
  exibirX(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirX(posX, posY);
  }

  //Retonar se a peça O deve ser esibida para a coordenada informada
  exibirO(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirO(posX, posY);
  }

  //Retorna se a marcação de vitória deve ser exibida para a coordenada informada
  exibirVitoria(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }

  //Retorna o número do jogador a jogar
  get jogador(): number {
    return this.jogoDaVelhaService.jogador;
  }

  //Inicia um novo jogo
  novoJogo($event: any): void {
    this.jogoDaVelhaService.novoJogo();}
}
