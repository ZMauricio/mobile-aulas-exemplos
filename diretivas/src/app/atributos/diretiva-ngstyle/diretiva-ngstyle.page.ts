import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.page.html',
  styleUrls: ['./diretiva-ngstyle.page.scss'],
})
export class DiretivaNgstylePage implements OnInit {
  public valorFonte: string = '30px';
  public tamanhoFonte: number = 30;
  public defineCorFonte: boolean = true;
  public defineTamanhoFonte: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public mudarTamanhoFonte() {
    this.defineTamanhoFonte = !this.defineTamanhoFonte;
  }

  public mudarCorFonte() {
    this.defineCorFonte = !this.defineCorFonte;
  }

  public incrementar() {
    this.tamanhoFonte++;
    this.valorFonte = this.tamanhoFonte+'px';
  }

  public decrementar() {
    if (this.tamanhoFonte>2) {
      this.tamanhoFonte--;
      this.valorFonte = this.tamanhoFonte+'px';
    }
  }
}
