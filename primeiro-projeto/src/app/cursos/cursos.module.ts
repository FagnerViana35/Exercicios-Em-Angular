import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosService } from './cursos.service';



@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers:[CursosService],
  exports:[]

})
export class CursosModule { }
