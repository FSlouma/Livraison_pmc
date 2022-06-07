import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomPage } from './hom.page';

const routes: Routes = [
  {
    path: '',
    component: HomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomPageRoutingModule {}
