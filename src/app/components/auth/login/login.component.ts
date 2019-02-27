import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor() {}

  handleLogin(form: NgForm) {
    if(form.invalid){
      return false;
    }
    console.log('login data', form.value);
  }
}
