import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttedancePageRoutingModule } from './attedance-routing.module';

import { AttedancePage } from './attedance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttedancePageRoutingModule
  ],
  declarations: [AttedancePage]
})
export class AttedancePageModule {}
