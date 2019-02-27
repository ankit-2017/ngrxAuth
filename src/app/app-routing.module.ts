import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path:"auth",
    loadChildren: "./components/auth/auth.module#AuthModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
