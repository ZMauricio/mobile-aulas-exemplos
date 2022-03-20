import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiretivaNgforPage } from './diretiva-ngfor.page';

const routes: Routes = [
  {
    path: '',
    component: DiretivaNgforPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiretivaNgforPageRoutingModule {}
