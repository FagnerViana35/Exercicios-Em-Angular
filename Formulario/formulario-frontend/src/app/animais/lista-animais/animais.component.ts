import { AnimaisService } from './../animais.service';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';


import { Component, Input, OnInit } from '@angular/core';
import { Animais } from '../animal';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {

  animais!: Animais;

  constructor(
    private usuarioService: UsuarioService,
    private animaisService: AnimaisService
    ) { }

  ngOnInit(): void {
    this.usuarioService.retormaUsuario().subscribe((usuario) => {
      const userName = usuario.name ?? '';
      console.log(userName)
      this.animaisService.listaDoUsuario(userName).subscribe((animais) =>{
          this.animais = animais;
          console.log(animais)
      })
    })
  }
}

