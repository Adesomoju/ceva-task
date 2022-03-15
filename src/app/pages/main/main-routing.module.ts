import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditInforComponent } from './edit-infor/edit-infor.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    component: ProfileComponent,
    path: '',
  },
  {
    component: EditInforComponent,
    path: 'edit-infor',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
