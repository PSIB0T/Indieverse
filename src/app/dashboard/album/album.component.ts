import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../artist.service';
import { IAlbum } from '../../music-player/classes/iAlbum';
import { IMusic } from '../../music-player/classes/iMusic';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  albumName: String;
  albumId: String;
  albumCoverArt: String;
  albumArtist: String;
  albumDate: Date;
  albumSongs: IMusic[];

  constructor(private _artistService: ArtistService, private _route: ActivatedRoute) {
    this._route.params.subscribe(params => {
      this.albumId = params['id'];
    });
  }

  ngOnInit() {
    this._artistService.fetchAlbum(this.albumId)
                       .subscribe((album: IAlbum) => {
                         this.albumName = album.title;
                         this.albumArtist = album.artist.username;
                         this.albumDate = album.date;
                         this.albumCoverArt = album.albumArt;
                         this.albumSongs = album.musics.map((music) => {
                           return {
                             id: music.id,
                             title: music.title
                           }
                         })
                         console.log(this.albumSongs);
                       })
  }

}
