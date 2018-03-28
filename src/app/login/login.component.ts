import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from './../login.service';
import { IUser } from './classes/iUser'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private form: FormGroup;
  private formControl: any;
  private user: IUser
  private error: any;

  constructor(private _fb: FormBuilder, private _loginService: LoginService) {
      this.form = this._fb.group({
          username: ['', [<any>Validators.required]],
          password: ['', [<any>Validators.required]]
      });
      this.formControl = this.form.controls;
   }

  ngOnInit() {
  }

  login() {
    this.user = {
      username: this.formControl.username.value,
      password: this.formControl.password.value
    };
    this._loginService.login(this.user)
        .subscribe((res: IUser) => {
          this.error = '';
          console.log('logged in successfully');
          localStorage.setItem('currentUser', JSON.stringify(this.user));
        }, (errors: any) => {
          this.error = 'Username or password is incorrect';
        });
  }

}
