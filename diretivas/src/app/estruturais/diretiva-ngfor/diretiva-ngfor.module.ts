import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiretivaNgforPageRoutingModule } from './diretiva-ngfor-routing.module';

import { DiretivaNgforPage } from './diretiva-ngfor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiretivaNgforPageRoutingModule
  ],
  declarations: [DiretivaNgforPage]
})
export class DiretivaNgforPageModule {}
