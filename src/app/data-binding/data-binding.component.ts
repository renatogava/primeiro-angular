import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  message = 'Primeiro Data Binding!';
  imagePath = 'assets/@renato.webp';
  isDisabled = true;
  ariaLabel = 'Fechar';
  estilizarTitulo = true;
  botaoClass = { botao: true, verde: false };
  botaoFechar = {
    border: '1px solid',
    'border-radius': '45px',
    display: 'flex',
    margin: '15px 0px',
    padding: '5px',
    width: '30px',
    height: '30px',
    'justify-content': 'center',
    'align-items': 'center'
};

imageWidth = 300;
nomeCliente = '';

enableCloseButton() {
  this.isDisabled = !this.isDisabled;
}

aplicaEstiloTitulo() {
  this.estilizarTitulo = !this.estilizarTitulo;

  this.botaoClass = {
    botao: true,
    verde: !this.botaoClass.verde
  };
}
}
