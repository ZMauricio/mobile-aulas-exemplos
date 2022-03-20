import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'bookmark' },
    { title: 'Interpolation', url: '/interpolation', icon: 'bookmark' },
    { title: 'Property binding', url: '/property-binding', icon: 'bookmark' },
    { title: 'Event binding', url: '/event-binding', icon: 'bookmark' },
    { title: 'Two-way data binding', url: '/two-way-binding', icon: 'bookmark' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
