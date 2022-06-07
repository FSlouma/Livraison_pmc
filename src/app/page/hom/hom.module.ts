import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomPageRoutingModule } from './hom-routing.module';

import { HomPage } from './hom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomPageRoutingModule
  ],
  declarations: [HomPage]
})
export class HomPageModule {}
