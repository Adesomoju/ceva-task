import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { EditInforComponent } from './edit-infor/edit-infor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Data } from 'src/app/shared/data/data';


@NgModule({
  declarations: [
    ProfileComponent,
    EditInforComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MainRoutingModule
  ],
  providers:[Data]
})
export class MainModule { }
