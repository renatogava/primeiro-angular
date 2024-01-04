import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  podeAcessar: boolean = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {

    this.podeAcessar = this.authService.podeAcessar();
  }

  alterarAcesso(e: any) {
    this.authService.update(e.target.checked);
  }
}
