import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventBindingPage } from './event-binding.page';

const routes: Routes = [
  {
    path: '',
    component: EventBindingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventBindingPageRoutingModule {}
