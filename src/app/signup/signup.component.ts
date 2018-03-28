import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { matchingPasswords } from './../validators/matchPassword';
import { emailValidator } from '../validators/emailVaildator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private form: FormGroup;
  private formControl: any;
  private error: any;

  constructor(private _fb: FormBuilder, private _loginService: LoginService) {
      this.form = this._fb.group({
          firstname: ['', [<any>Validators.required]],
          lastname: ['', [<any>Validators.required]],
          description: [''],
          username: ['', [<any>Validators.required]],
          password: ['', [<any>Validators.required]],
          confirmPassword: ['', [<any>Validators.required]],
          email: ['', Validators.compose([<any>Validators.required, emailValidator])]
      }, {validator: matchingPasswords('password', 'confirmPassword')});
      this.formControl = this.form.controls;
   }

  ngOnInit() {
  }

  signup() {
    console.log(this.form)
  }

}
