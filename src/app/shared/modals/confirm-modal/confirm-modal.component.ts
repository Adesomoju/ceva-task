import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  data:any

  constructor(public dialogRef: MatDialogRef<ConfirmModalComponent>) { }

  ngOnInit(): void {
  }

  modalResponse(val?: any) {
    this.dialogRef.close({ data: val });
  }

}
