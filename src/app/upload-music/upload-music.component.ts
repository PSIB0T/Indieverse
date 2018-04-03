import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UploadService } from '../upload.service';
import { IAlbum } from '../music-player/classes/iAlbum';
import { IArtist } from '../music-player/classes/iArtist';
import { IMusic } from '../music-player/classes/iMusic';
import { config } from '../../../config';

@Component({
  selector: 'app-upload-music',
  templateUrl: './upload-music.component.html',
  styleUrls: ['./upload-music.component.scss']
})
export class UploadMusicComponent implements OnInit {

  @ViewChild('music') musicElement;

  albums: IAlbum[];
  genres: string[];
  profileId = config.profileId;
  private form: FormGroup;
  private formControl: any;
  private error: any;

  constructor(private _fb: FormBuilder, private _uploadService: UploadService) {
    this.genres = ['heavy metal', 'party', 'jazz', 'rock', 'techno', 'classical']
  }

  ngOnInit() {
    this.form = this._fb.group({
      title: ['', [<any>Validators.required]],
      albumId: ['', [<any>Validators.required]],
      date: [''],
      genre: ['', [<any>Validators.required]],
    });
    this.formControl = this.form.controls;
    this.fetchAlbums(this.profileId);
  }

  fetchAlbums(profileId: string) {
    this._uploadService.loadAlbums(profileId)
                       .subscribe((user: IArtist) => {
                         if (user) {
                            this.albums = user.albums;
                         }
                       })
  }

  uploadMusic() {
    const musicInfo: IMusic = this.form.value;
    musicInfo.album = {}
    console.log(this.form.value)
    musicInfo.album.id = this.form.value.albumId;
    const musicFile = this.musicElement.nativeElement;
    console.log(musicInfo);
    if (musicFile.files && musicFile.files[0]) {
      this._uploadService.uploadFile(musicFile.files[0])
                         .subscribe((res) => {
                           musicInfo.streamUrl = res;
                           this._uploadService.uploadMusic(musicInfo)
                                              .subscribe((result) => {
                                                console.log(result);
                                                console.log('Uploaded successfully');
                                              }, (err) => {
                                                console.log(err);
                                              })
                         })
    }
  }

}
