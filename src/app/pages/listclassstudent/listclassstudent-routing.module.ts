import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListclassstudentPage } from './listclassstudent.page';

const routes: Routes = [
  {
    path: '',
    component: ListclassstudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListclassstudentPageRoutingModule {}
