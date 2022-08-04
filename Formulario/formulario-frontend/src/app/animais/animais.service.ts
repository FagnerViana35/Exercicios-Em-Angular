import { TokenService } from '../autenticacao/usuario/token.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Animais } from './animal';

const API=environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  listaDoUsuario(nomeUsuario:string) :Observable<Animais>{
      const token = this.tokenService.retornaToken();
      const headers = new HttpHeaders().append('x-access-token', token);
      return this.httpClient.get<Animais>(`${API}/${nomeUsuario}/photos`, {headers:headers})
  }

}
