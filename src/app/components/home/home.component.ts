import { Component, OnInit } from '@angular/core';
import { UserService } from './../../Services/user/user.service';
import { JobCategory } from './../../Models/jobCategory/job-category'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
   
})

export class HomeComponent implements OnInit {
   jobCategory!: JobCategory[] 


   constructor(private userService: UserService){}

   ngOnInit(){

      this.getJobsCatData()
   }

   getJobsCatData(){
       this.userService.getJobCategories()
      .subscribe(data => this.jobCategory = data)

   }

}
