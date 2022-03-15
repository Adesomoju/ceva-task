import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from 'src/app/shared/data/data';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  work_experience: FormArray;
  InformationForm: FormGroup;
  qualifications: string[];

  constructor(
    private fb: FormBuilder,
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
      work_experience:  this.fb.array([this.workExperienceForm()])
    })

    this.qualifications = this.data.qualifications;
  }

  workExperienceForm(): FormGroup {
    return this.fb.group({
      job_title: ['', [Validators.required]],
      years_experience: ['', [Validators.required]],
      role: ['', [Validators.required]],
      company_name: ['', [Validators.required]],
      location: ['', [Validators.required]],
    })
  }

  // remove an item from an array
  removeWorkExperience(index) {
    this.work_experience.removeAt(index);
  }

  // add an item to form array
  addWorkExperience() {
    this.work_experience = this.InformationForm.get('work_experience') as FormArray;
    this.work_experience.push(this.workExperienceForm());
  }

  get userFormGroups () {
    return this.InformationForm.get('work_experience') as FormArray
  }

  // save personalInfo data

  onSave(){
    console.log('result', this.InformationForm.value)
    this.router.navigateByUrl('/profile')
  }

}
