import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
errormsg: string;
body: Object;
loginForm : FormGroup;

	constructor(fb: FormBuilder, private authservice: AuthenticationService, private router: Router){
		this.loginForm = fb.group({
		  'email' : [null,  Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.pattern(/^.+@.+\..+$/)])],
	      'password': [null, Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(50)])]
		})
	}
	submitForm(value: any){
	    this.body = value;
	    this.authservice.login(this.body)
	  	.subscribe(resdata => {
	  		if(resdata["user"])
	  		this.router.navigate(['/userDashboard']);
	  		else if(resdata["admin"])
	  		this.router.navigate(['/adminDashboard']);
	  		
	  		},reserror => {console.log("error here...",reserror);});
	  	
	}
	  
  ngOnInit() {
    
  }

}
