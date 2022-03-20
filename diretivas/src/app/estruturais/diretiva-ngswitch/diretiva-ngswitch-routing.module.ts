import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiretivaNgswitchPage } from './diretiva-ngswitch.page';

const routes: Routes = [
  {
    path: '',
    component: DiretivaNgswitchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiretivaNgswitchPageRoutingModule {}
