import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  aplicarClasse = false;
  estilosParagrafo = { 'font-size': '14px', 'font-style': 'italic' };
  name = '';
  camposVisiveis = true;
  clientes = [
    { nome: "Renato" },
    { nome: "Rafael" },
    { nome: "Douglas" },
    { nome: "João" }];

  botaoClick() {
    this.aplicarClasse = !this.aplicarClasse;
  }

  setUppercaseName($event: any) {

    this.name = $event.toUpperCase();
  }

  esconderCampos() {
    this.camposVisiveis = !this.camposVisiveis;
  }

}
