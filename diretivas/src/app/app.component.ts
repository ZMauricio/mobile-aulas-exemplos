import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'bookmark' },
    { title: 'Diretiva *ngIf', url: '/diretiva-ngif', icon: 'bookmark' },
    { title: 'Diretiva *ngFor', url: '/diretiva-ngfor', icon: 'bookmark' },
    { title: 'Diretiva *ngSwitch', url: '/diretiva-ngswitch', icon: 'bookmark' },
    { title: 'Diretiva *ngClass', url: '/diretiva-ngclass', icon: 'bookmark' },
    { title: 'Diretiva *ngStyle', url: '/diretiva-ngstyle', icon: 'bookmark' }
  ];
  
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
