import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropertyBindingPageRoutingModule } from './property-binding-routing.module';

import { PropertyBindingPage } from './property-binding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropertyBindingPageRoutingModule
  ],
  declarations: [PropertyBindingPage]
})
export class PropertyBindingPageModule {}
