import { NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { EffectsModule, Actions } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { authRoutes } from "./auth.routes";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthComponent } from "./auth.component";

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    FormsModule,
    EffectsModule,
    StoreModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent
  ]
})

export class AuthModule {}



