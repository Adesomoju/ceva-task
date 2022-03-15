import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { ConfirmModalComponent } from "./modals/confirm-modal/confirm-modal.component";


@NgModule({
    declarations: [ConfirmModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    RouterModule,
    ],
    exports: [ConfirmModalComponent],
    providers: []
})


export class SharedModule { }