import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiretivaNgclassPageRoutingModule } from './diretiva-ngclass-routing.module';

import { DiretivaNgclassPage } from './diretiva-ngclass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiretivaNgclassPageRoutingModule
  ],
  declarations: [DiretivaNgclassPage]
})
export class DiretivaNgclassPageModule {}
