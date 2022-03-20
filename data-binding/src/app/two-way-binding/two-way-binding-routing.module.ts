import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwoWayBindingPage } from './two-way-binding.page';

const routes: Routes = [
  {
    path: '',
    component: TwoWayBindingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwoWayBindingPageRoutingModule {}
