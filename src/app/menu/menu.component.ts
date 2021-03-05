import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public testeTexto:string;
  constructor() { }

  ngOnInit(): void {
    this.testeTexto="Olá tudo bem ?"
  }
  clicou(){
    this.testeTexto="CLICOU"
  }
}
