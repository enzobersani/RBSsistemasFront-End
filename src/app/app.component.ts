import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router){}

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) },
    { label: 'Cadastro de usuário', action: () => this.router.navigate(['user']) },
    { label: 'Cadastro de produto', action: () => this.router.navigate(['product']) }
  ];
  logo = 'assets/img/restaurante.jpeg'


  private onClick() {
    alert('Clicked in menu item')
  }

}
