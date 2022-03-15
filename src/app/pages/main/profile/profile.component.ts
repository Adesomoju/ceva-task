import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/core/modal-service/modal.service';
import { Data } from 'src/app/shared/data/data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  InformationForm: FormGroup;
  qualifications: string[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private modal: ModalService,
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

  confirmAction() {
    const data = {
      title: "Delete Records",
      content: "Are you sure you want to delete this Record ?"
    };
    this.modal.ConfirmActionModal(data).subscribe(
      (res: any) => {
        if(res.data == 2){
          this.router.navigateByUrl('/auth');
        }
      },
      err => {
        console.log(err);
      }
    )
  }


}
