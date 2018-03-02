import { Component, OnInit } from '@angular/core';
import { 
	FormBuilder, 
    FormGroup, 
    Validators, 
    FormControl, 
    AbstractControl 
} from '@angular/forms';

function matchPasswords(c: AbstractControl) {
    return c.get('password').value === c.get('confirmPassword').value ? null : {'noMatch': true};
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
	
	showErrorMsg: boolean = false;
	signUpForm: FormGroup;

	constructor( public fb: FormBuilder ) {

		this.signUpForm = this.fb.group({
			emailId: new FormControl('', [ Validators.required ]),
			password : new FormControl('', [ Validators.required ]),
			confirmPassword : new FormControl('', [ Validators.required ]),
		}, { validator: matchPasswords });

	}

	ngOnInit() {
	}

	signUp(credentials) {
		console.log(credentials);
		if (credentials.emailId != 'vnyksj71@gmail.com') {
			this.showErrorMsg = true;
		}
		else {
			this.showErrorMsg = false;	
		}
	}

}
