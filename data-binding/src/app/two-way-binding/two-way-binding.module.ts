import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwoWayBindingPageRoutingModule } from './two-way-binding-routing.module';

import { TwoWayBindingPage } from './two-way-binding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwoWayBindingPageRoutingModule
  ],
  declarations: [TwoWayBindingPage]
})
export class TwoWayBindingPageModule {}
