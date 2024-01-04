import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  update(acesso: boolean): void {

    sessionStorage.setItem('podeAcessar', acesso.toString());
  }

  podeAcessar(): boolean {

    let podeAcessarStorage = sessionStorage.getItem('podeAcessar');

    if (!podeAcessarStorage) {
      return false;
    }

    return JSON.parse(podeAcessarStorage);
  }
}