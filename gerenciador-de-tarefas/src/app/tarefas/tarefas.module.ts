import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefaService } from './shared/tarefa.service';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CadastrarTarefaComponent } from './cadastrar/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './editar/editar-tarefa.component';


@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    TarefaService,
  ]
})
export class TarefasModule { }
