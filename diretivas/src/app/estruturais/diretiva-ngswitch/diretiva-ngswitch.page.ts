import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.page.html',
  styleUrls: ['./diretiva-ngswitch.page.scss'],
})
export class DiretivaNgswitchPage implements OnInit {
  public selecionado: string = 'Matemática';

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
