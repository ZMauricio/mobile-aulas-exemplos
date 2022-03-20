import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.page.html',
  styleUrls: ['./diretiva-ngfor.page.scss'],
})
export class DiretivaNgforPage implements OnInit {

  public cursos: Array<string> = [
    'Matemática',
    'Ciência da Computação',
    'Sistemas de Informação',
    'Engenharia de Computação'
  ];

  constructor() { }

  ngOnInit() {
  }

}
