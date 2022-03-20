import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiretivaNgstylePageRoutingModule } from './diretiva-ngstyle-routing.module';

import { DiretivaNgstylePage } from './diretiva-ngstyle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiretivaNgstylePageRoutingModule
  ],
  declarations: [DiretivaNgstylePage]
})
export class DiretivaNgstylePageModule {}
