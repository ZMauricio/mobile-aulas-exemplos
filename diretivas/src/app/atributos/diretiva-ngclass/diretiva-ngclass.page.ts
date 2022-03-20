import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.page.html',
  styleUrls: ['./diretiva-ngclass.page.scss'],
})
export class DiretivaNgclassPage implements OnInit {
  public aplicar: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public aplicarClasse() {
    this.aplicar = !this.aplicar;
  }

  public definirClasses() {
    return {
      'item-cor-fundo': true, 
      'item-cor-borda': true, 
      'alinhamento-texto': true, 
      'estilo-letra': true
    };
  }

}
