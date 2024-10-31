import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListclassteacherPage } from './listclassteacher.page';

const routes: Routes = [
  {
    path: '',
    component: ListclassteacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListclassteacherPageRoutingModule {}
