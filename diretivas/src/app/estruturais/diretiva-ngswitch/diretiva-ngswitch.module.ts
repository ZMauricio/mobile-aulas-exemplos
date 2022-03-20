import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiretivaNgswitchPageRoutingModule } from './diretiva-ngswitch-routing.module';

import { DiretivaNgswitchPage } from './diretiva-ngswitch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiretivaNgswitchPageRoutingModule
  ],
  declarations: [DiretivaNgswitchPage]
})
export class DiretivaNgswitchPageModule {}
