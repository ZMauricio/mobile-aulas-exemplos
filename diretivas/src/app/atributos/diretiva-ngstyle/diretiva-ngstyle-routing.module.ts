import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiretivaNgstylePage } from './diretiva-ngstyle.page';

const routes: Routes = [
  {
    path: '',
    component: DiretivaNgstylePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiretivaNgstylePageRoutingModule {}
