import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.page.html',
  styleUrls: ['./property-binding.page.scss'],
})
export class PropertyBindingPage implements OnInit {
  public foto: string = "./../../assets/img/spider-man.png";

  constructor() { }

  ngOnInit() {
  }

}
