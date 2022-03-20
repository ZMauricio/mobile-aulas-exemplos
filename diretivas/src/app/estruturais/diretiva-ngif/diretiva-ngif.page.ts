import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.page.html',
  styleUrls: ['./diretiva-ngif.page.scss'],
})
export class DiretivaNgifPage implements OnInit {
  public exibir: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }
  

	mudar(): void {
		this.exibir = ! this.exibir;
	}

}
