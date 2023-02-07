import { Component } from '@angular/core';
import { UserService } from './../../Services/user/user.service';
import { User } from './../../Models/user/user.model'

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})

export class EmployeeRegisterComponent {

  userData!: User;


  constructor(private userRestService: UserService){}

  employeeRegister(data: any){

      this.userData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        company_name: data.company_name,
        company_website: data.company_website,
        password: data.password,
        confirm_password: data.confirm_password,
        check_t_and_c: data.check_t_and_c,

      }

       this.userRestService.storeEmpRegister(this.userData)
       .subscribe(data => 
          console.log('Employee data successfully stored.')
        )
  }


}
