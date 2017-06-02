import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html'
})
export class ForgotComponent implements OnInit {

  forgotForm : FormGroup;
 		constructor(fb: FormBuilder){
			this.forgotForm = fb.group({
			  'email' : [null,  Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.pattern(/^.+@.+\..+$/)])]
			})
		}
	submitForm(value: any){
	    console.log("value ", value);
	}

  ngOnInit() {
  }

}
