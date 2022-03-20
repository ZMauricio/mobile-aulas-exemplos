import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiretivaNgifPage } from './diretiva-ngif.page';

const routes: Routes = [
  {
    path: '',
    component: DiretivaNgifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiretivaNgifPageRoutingModule {}
