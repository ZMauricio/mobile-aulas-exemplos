import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterpolationPage } from './interpolation.page';

const routes: Routes = [
  {
    path: '',
    component: InterpolationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterpolationPageRoutingModule {}
