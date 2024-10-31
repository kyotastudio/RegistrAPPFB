import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttedancePage } from './attedance.page';

const routes: Routes = [
  {
    path: '',
    component: AttedancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttedancePageRoutingModule {}
