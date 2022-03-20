import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.page.html',
  styleUrls: ['./event-binding.page.scss'],
})
export class EventBindingPage implements OnInit {
  curso: string = "Matemática";

  constructor() { }

  ngOnInit() {
  }

	public mudar(): void {
		this.curso = "Artes";
	}
}
