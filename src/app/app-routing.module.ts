import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hom',
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadChildren: () => import('./page/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'hom',
    loadChildren: () => import('./page/hom/hom.module').then( m => m.HomPageModule)
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
