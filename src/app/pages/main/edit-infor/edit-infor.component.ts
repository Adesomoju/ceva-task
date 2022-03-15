import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/core/modal-service/modal.service';
import { Data } from 'src/app/shared/data/data';

@Component({
  selector: 'app-edit-infor',
  templateUrl: './edit-infor.component.html',
  styleUrls: ['./edit-infor.component.scss']
})
export class EditInforComponent implements OnInit {

  InformationForm: FormGroup;
  qualifications: string[];

  constructor(
    private fb: FormBuilder,
    private modal: ModalService,
    private router: Router,
    public data: Data
  ) { }

  ngOnInit(): void {
    this.InformationForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      home_address: ['', [Validators.required]],
      email: ['', [Validators.required]],
      qualification: ['', [Validators.required]],
      job_title: ['', [Validators.required]],
      years_experience: ['', [Validators.required]],
      role: ['', [Validators.required]],
      company_name: ['', [Validators.required]],
      location: ['', [Validators.required]],
    })

    this.qualifications = this.data.qualifications;
    this.InformationForm.patchValue(this.data.userData[0])
  }


  // save personalInfo data

  onSave() {
    this.confirmAction()
  }

  confirmAction() {
    const data = {
      title: "Edit Records",
      content: "Are you sure you want to save this change ?"
    };
    this.modal.ConfirmActionModal(data).subscribe(
      (res: any) => {
        if (res.data == 2) {
          this.router.navigateByUrl('/profile');
        }
      },
      err => {
        console.log(err);
      }
    )
  }

}
