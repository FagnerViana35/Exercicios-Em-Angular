import { ListaAnimaisComponent } from './lista-animais/animais.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimaisRoutingModule } from './animais.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AnimaisRoutingModule
  ],
  declarations: [ListaAnimaisComponent]
})
export class AnimaisModule { }
