import {Injectable} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmModalComponent } from 'src/app/shared/modals/confirm-modal/confirm-modal.component';


@Injectable({
    providedIn: 'root'
})

export class ModalService {

    constructor(
		private matDialog: MatDialog
	) { }

    ConfirmActionModal(data: any){
		let dialogRef: MatDialogRef<ConfirmModalComponent>;
		dialogRef = this.matDialog.open(ConfirmModalComponent);
		dialogRef.componentInstance.data = data;
		dialogRef.disableClose = true;
		dialogRef.updateSize('400px');
		return dialogRef.afterClosed();
	}

}