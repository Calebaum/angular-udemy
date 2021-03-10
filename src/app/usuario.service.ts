import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario {
    let usuario = new Usuario()
    usuario.nome = "Calebe"
    usuario.email = "calebaum@gmail.com"

    return usuario
  }

  public listaUusario(): Usuario[] {
    return [
      {
        nome: "Calebe",
        email: "calebaum@gmail.com"
      },
      {
        nome: "Geber",
        email: "geber@gmail.com"
      },

      {
        nome: "Maria",
        email: "maria@gmail.com"
      },

      {
        nome: "Jose",
        email: "jose@gmail.com"
      }
    ]
  }
}
