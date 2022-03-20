import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventBindingPageRoutingModule } from './event-binding-routing.module';

import { EventBindingPage } from './event-binding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventBindingPageRoutingModule
  ],
  declarations: [EventBindingPage]
})
export class EventBindingPageModule {}
