import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filho-a',
  templateUrl: './filho-a.component.html',
  styleUrls: ['./filho-a.component.css']
})
export class FilhoAComponent {

  @Input() texto = '';

  @Output() textoPreenchido = new EventEmitter<string>();

  enviar(value: string) {
    this.textoPreenchido.emit(value);
  }
}
