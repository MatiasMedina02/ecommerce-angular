import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [FormsModule, ReactiveFormsModule, NgIf, NgClass]
})
export class ContactComponent {
  contactForm: FormGroup;

  public constructor( private form: FormBuilder ) {
    this.contactForm = this.form.group({
      name: ["", [ Validators.required, Validators.minLength(4)]],
      lastname: ["", [ Validators.required, Validators.minLength(4)]],
      email: ["", [ Validators.email, Validators.required ]],
      message: ["", [ Validators.required ]]
    })
  }

  hasErrors(controlName: string, errorType: string) {
    return this.contactForm.get(controlName)?.hasError(errorType) && this.contactForm.get(controlName)?.touched;
  }

  submit() {
    console.log(this.contactForm);
  }
}
