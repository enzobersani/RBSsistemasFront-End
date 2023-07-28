import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PoInputComponent, PoNotification, PoNotificationService, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{
  @ViewChild('nome', { static: true }) nameInput!: PoInputComponent;
  @ViewChild('email', { static: true }) emailInput!: PoInputComponent;
  columns!: Array<PoTableColumn>;
  items!: any[];


  constructor(private http: HttpClient, public poNotification: PoNotificationService){}

  ngOnInit(){
    this.columns = this.getColumns();
    this.getItems();
  }

  enviarDados(){
    console.log(this.nameInput.modelLastUpdate)
    const url = 'https://localhost:7006/api/Usuario';
    const dados = {
      Nome: this.nameInput.modelLastUpdate,
      Email: this.emailInput.modelLastUpdate
    };
    console.log(dados)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post(url, dados, { headers }).subscribe(
      response => {
        console.log(response);
        this.ngOnInit();
        this.poNotification.success('Usuário cadastrado com sucesso!');
      },
      error => {
        console.log(error);
      }
    );
  }

  getColumns(): Array<PoTableColumn>{
    return [
      { property: 'id', label: 'Id' },
      { property: 'nome', label: 'Nome' },
      { property: 'email', label: 'Email' },
    ]
  }

  getItems(){
    const url = 'https://localhost:7006/api/Usuario/search'

    this.http.get<any[]>(url).subscribe(
      response => {
        this.items = response;
      },
      error => {
        console.log(error);
      }
    )
  }
}
