import { CartaoComponent } from './cartao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartaoComponent],
  exports:[
    CartaoComponent
  ]
})
export class CartaoModule { }
