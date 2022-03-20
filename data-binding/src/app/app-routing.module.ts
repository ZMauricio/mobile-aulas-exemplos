import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
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
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
