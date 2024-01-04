import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  constructor(private formBuilder: FormBuilder) { }

  profileForm = this.formBuilder.group({
    name: ['', Validators.required],
    cpf: ['', Validators.required],
    address: this.formBuilder.group({
      street: [''],
      zip: [''],
      city: [''],
      state: ['']
    }),
    apelidos: this.formBuilder.array([this.formBuilder.control('')])
  });

  atualizarProfile() {

    this.profileForm.patchValue({
      name: 'João',
      address: {
        street: 'Rua das Cicas, 478',
      },
    });
  }

  get apelidos() {
    return this.profileForm.get('apelidos') as FormArray;
  }

  adicionarApelido() {
    this.apelidos.push(this.formBuilder.control(''));
  }

  submitForm() {
    console.warn(this.profileForm.value);
  }
}