import { CartaoModule } from './../componentes/cartao/cartao.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimaisRoutingModule } from './animais.routing.module';
import { ListaAnimaisComponent } from './lista-animais/animais.component';
import { AnimalComponent } from './animal/animal.component';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';
import { CartaoComponent } from '../componentes/cartao/cartao.component';

@NgModule({
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    CartaoModule

  ],
  declarations: [ListaAnimaisComponent,AnimalComponent, GradeFotosAnimaisComponent]
})
export class AnimaisModule { }
