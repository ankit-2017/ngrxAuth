import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  constructor() {}

  handleSubmit(form: NgForm){
    if(form.invalid){
      return false;
    }
    console.log('form value', form.value);
  }
}
