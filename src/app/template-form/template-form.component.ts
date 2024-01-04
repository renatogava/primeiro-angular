import { Component } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  model: Customer = new Customer(null, '', '');

  generos = ['Masculino', 'Feminino',
            'Prefino não informar'];

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
