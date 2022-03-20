import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiretivaNgclassPage } from './diretiva-ngclass.page';

const routes: Routes = [
  {
    path: '',
    component: DiretivaNgclassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiretivaNgclassPageRoutingModule {}
