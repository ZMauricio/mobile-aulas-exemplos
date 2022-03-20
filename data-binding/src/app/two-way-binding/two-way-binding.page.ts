import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.page.html',
  styleUrls: ['./two-way-binding.page.scss'],
})
export class TwoWayBindingPage implements OnInit {
  curso: string = "Matemática";
  
  constructor() { }

  ngOnInit() {
  }

}
