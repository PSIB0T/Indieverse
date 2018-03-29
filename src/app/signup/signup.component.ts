import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { CustomValidators } from './../validators/customValidators';
import {Observable} from 'rxjs/Observable';
import { IArtist } from '../music-player/classes/iArtist';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('profileImage') profileImage;
  @ViewChild('coverImage') coverImage;

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
          email: ['', Validators.compose([<any>Validators.required, CustomValidators.emailValidator])]
      }, {validator: CustomValidators.matchingPasswords('password', 'confirmPassword')});
      this.formControl = this.form.controls;
   }

  ngOnInit() {
  }

  signup() {
    const pi = this.profileImage.nativeElement;
    const ci = this.coverImage.nativeElement;
    const userInfo: IArtist = this.form.value;
    if (pi.files && pi.files[0] && ci.files && ci.files[0]) {
      this._loginService.uploadFile(pi.files[0])
          .mergeMap((profileImage) => {
            userInfo.profileImage = profileImage;
            return this._loginService.uploadFile(ci.files[0])
          }).mergeMap((res) => {
            userInfo.coverImage = res;
            return this._loginService.signUp(userInfo)
          }).subscribe((res) => {
            console.log(res);
          }, (err) => {
            console.log(err)
          })

    }
  }

}
