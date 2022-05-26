import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "", component: LandingComponent, pathMatch: "full"},
  { path: "landing", component: LandingComponent, pathMatch: "full"},
  { path: "landing/login", component: LoginComponent, pathMatch: "full"},
  { path: "landing/register", component: RegisterComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
