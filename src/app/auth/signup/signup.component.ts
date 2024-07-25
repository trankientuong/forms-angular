import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signupForm = new FormGroup({
    email: new FormControl('', {
      validators: [ Validators.email, Validators.required ]
    }),
    password: new FormControl('', {
      validators: [ Validators.required, Validators.minLength(6) ]
    })
  })

  onReset() {
    this.signupForm.reset();
  }

  onSubmit() {
    const enteredEmail = this.signupForm.value.email;
    const enteredPassword = this.signupForm.value.password;
    console.log(enteredEmail, enteredPassword);
  }
}
