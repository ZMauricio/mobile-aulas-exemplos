import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterpolationPageRoutingModule } from './interpolation-routing.module';

import { InterpolationPage } from './interpolation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterpolationPageRoutingModule
  ],
  declarations: [InterpolationPage]
})
export class InterpolationPageModule {}
