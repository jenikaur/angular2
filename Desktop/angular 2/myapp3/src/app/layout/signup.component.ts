import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

	registerForm : FormGroup;
  	constructor(fb: FormBuilder) {
  		this.registerForm = fb.group({
		  'email' : [null,  Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.pattern(/^.+@.+\..+$/)])],
	      'firstname': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+$/)])],
	      'lastname': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]+$/)])]
		})
  	 }

  	 submitForm(value: any){
	    console.log('Reactive Form Data: ')
	    console.log(value);
	  }

  ngOnInit() {
  }

}
