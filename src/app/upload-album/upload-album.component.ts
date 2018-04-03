import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { UploadService } from '../upload.service';
import { IAlbum } from '../music-player/classes/iAlbum';
import { LoadMusic } from '../dashboard/loadMusic.service';
import { IArtist } from '../music-player/classes/iArtist';

@Component({
  selector: 'app-upload-album',
  templateUrl: './upload-album.component.html',
  styleUrls: ['./upload-album.component.scss']
})
export class UploadAlbumComponent implements OnInit {

  @ViewChild('albumArt') albumArt: ElementRef;
  private form: FormGroup;
  private formControl: any;
  private error: any;
  private profileId: string;
  users: IArtist[];

  constructor(private _fb: FormBuilder,
              private uploadService: UploadService,
              private musicService: LoadMusic) {

  }

  ngOnInit() {
    this.form = this._fb.group({
      title: ['', [<any>Validators.required]],
      description: [''],
      date: ['', [<any>Validators.required]],
      userId: ['', [<any>Validators.required]]
    });
    this.formControl = this.form.controls;
    this.musicService.loadUsers()
                      .subscribe((users: IArtist[]) => {
                        this.users = users;
                      })
  }

  uploadAlbum() {
    const album: IAlbum = this.form.value;
    const albumElement = this.albumArt.nativeElement;
    album.artist = {}
    album.artist.id = this.form.value.userId
    console.log(album)
    if (albumElement.files && albumElement.files[0]) {
      this.uploadService.uploadFile(albumElement.files[0])
                        .flatMap((link: string) => {
                          album.albumArt = link;
                          return this.uploadService.uploadAlbum(album);
                        })
                        .subscribe((res) => {
                          console.log(res);
                          console.log('Album uploaded successfully')
                        }, (err) => {
                          console.log(err);
                        })
    }
  }

}
