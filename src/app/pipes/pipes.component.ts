import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  date?: Date
  nameText?: string
  value: number = 45.50
  pi: number = 3.14159265359;

  ngOnInit() {
    this.date = new Date();
  }

  changeName(name: string) {
    this.nameText = name
  }

}
