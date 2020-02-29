import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';

@NgModule({
  declarations: [
    ListarTarefaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers:[
    TarefaService
  ]
})
export class TarefasModule { }
