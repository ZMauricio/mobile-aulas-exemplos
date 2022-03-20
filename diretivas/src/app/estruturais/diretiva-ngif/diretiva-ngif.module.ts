import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiretivaNgifPageRoutingModule } from './diretiva-ngif-routing.module';

import { DiretivaNgifPage } from './diretiva-ngif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiretivaNgifPageRoutingModule
  ],
  declarations: [DiretivaNgifPage]
})
export class DiretivaNgifPageModule {}
