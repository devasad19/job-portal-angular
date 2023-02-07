import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { HomeComponent } from './components/home/home.component'
import { CandidateRegisterComponent } from './components/candidate-register/candidate-register.component'
import { EmployeeRegisterComponent } from './components/employee-register/employee-register.component'


const routes: Routes = [
     {path: '' , redirectTo: 'home', pathMatch: 'full'},
     {path: 'home' , component: HomeComponent},
     {path: 'jobs' , component: HomeComponent},
     {path: 'login', component: LoginComponent},
     {path: 'register-candidate', component: CandidateRegisterComponent},
     {path: 'register-employee', component: EmployeeRegisterComponent},
  ]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
