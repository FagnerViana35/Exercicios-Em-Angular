import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {



  getCursos(){
    return ['Java','Angular','JavaScript','Python','C','C#','C++','Flutter']
  }
  constructor() { }
}
