import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'diretiva-ngfor',
    loadChildren: () => import('./estruturais/diretiva-ngfor/diretiva-ngfor.module').then( m => m.DiretivaNgforPageModule)
  },
  {
    path: 'diretiva-ngif',
    loadChildren: () => import('./estruturais/diretiva-ngif/diretiva-ngif.module').then( m => m.DiretivaNgifPageModule)
  },
  {
    path: 'diretiva-ngswitch',
    loadChildren: () => import('./estruturais/diretiva-ngswitch/diretiva-ngswitch.module').then( m => m.DiretivaNgswitchPageModule)
  },
  {
    path: 'diretiva-ngclass',
    loadChildren: () => import('./atributos/diretiva-ngclass/diretiva-ngclass.module').then( m => m.DiretivaNgclassPageModule)
  },
  {
    path: 'diretiva-ngstyle',
    loadChildren: () => import('./atributos/diretiva-ngstyle/diretiva-ngstyle.module').then( m => m.DiretivaNgstylePageModule)
  },
  {
    path: 'interpolation',
    loadChildren: () => import('./interpolation/interpolation.module').then( m => m.InterpolationPageModule)
  },
  {
    path: 'property-binding',
    loadChildren: () => import('./property-binding/property-binding.module').then( m => m.PropertyBindingPageModule)
  },
  {
    path: 'event-binding',
    loadChildren: () => import('./event-binding/event-binding.module').then( m => m.EventBindingPageModule)
  },
  {
    path: 'two-way-binding',
    loadChildren: () => import('./two-way-binding/two-way-binding.module').then( m => m.TwoWayBindingPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
