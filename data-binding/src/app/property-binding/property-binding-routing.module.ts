import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyBindingPage } from './property-binding.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyBindingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyBindingPageRoutingModule {}
