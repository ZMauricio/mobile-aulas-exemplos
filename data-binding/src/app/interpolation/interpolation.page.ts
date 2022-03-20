import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.page.html',
  styleUrls: ['./interpolation.page.scss'],
})
export class InterpolationPage implements OnInit {
  public curso: string = "Matemática";
  
  constructor() { }

  ngOnInit() {
  }

}
