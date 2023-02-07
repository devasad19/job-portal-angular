import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from './../../Services/auth/auth.service';
import { UserService } from './../../Services/user/user.service';
import { User } from './../../Models/user/user.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  loginRes: User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
    ){}


  ngOnInit(){
    this.form = this.formBuilder.group({
       username: ['', Validators.required],
       password: ['', Validators.required]
    });


  }

  get f(){
    return this.form.controls
  }

  loginSubmit(){
    this.submitted = true

    if(this.form.invalid){
      return
    }

     this.authService.login(this.f['username'].value, this.f['password'].value)
     .subscribe(data =>
       
     console.log(data)
     )

  }






}
