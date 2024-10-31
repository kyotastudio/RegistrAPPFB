import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListclassteacherPageRoutingModule } from './listclassteacher-routing.module';
import { ListclassteacherPage } from './listclassteacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListclassteacherPageRoutingModule
  ],
  declarations: [ListclassteacherPage]
})
export class ListclassteacherPageModule {}
