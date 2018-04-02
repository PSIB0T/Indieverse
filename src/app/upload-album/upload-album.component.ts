import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-upload-album',
  templateUrl: './upload-album.component.html',
  styleUrls: ['./upload-album.component.scss']
})
export class UploadAlbumComponent implements OnInit {

  private form: FormGroup;
  private formControl: any;
  private error: any;

  constructor(private _fb: FormBuilder) {

  }

  ngOnInit() {
    this.form = this._fb.group({
      title: ['', [<any>Validators.required]],
      description: [''],
      date: ['', [<any>Validators.required]]      
    });
    this.formControl = this.form.controls;
  }

}
