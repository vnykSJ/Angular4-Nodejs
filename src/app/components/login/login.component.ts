import { Component, OnInit } from '@angular/core';
import { 
	FormBuilder, 
	FormGroup, 
	Validators, 
	FormControl 
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	
	showErrorMsg: boolean = false;
	loginForm: FormGroup;

	constructor( private router:Router ) {

		this.loginForm = new FormGroup({
			emailId: new FormControl('', [ Validators.required ]),
			password : new FormControl('', [ Validators.required ]),
		});

	}

	ngOnInit() {
	}

	login(credentials) {
		console.log(credentials);
		if (credentials.emailId != 'vnyksj71@gmail.com') {
			this.showErrorMsg = true;
		}
		else {
			this.showErrorMsg = false;	
			this.router.navigate(['/home']);
		}
	}

}
