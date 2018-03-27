import { Component, OnInit } from '@angular/core';
import { ArtistService } from './../artist.service';
import { IArtist } from '../../music-player/classes/iArtist';
import { IAlbum } from '../../music-player/classes/iAlbum';
import { IMusic } from '../../music-player/classes/iMusic';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  artistId: string;
  artist_name: string;
  artist_desc: string;
  artist_img_url = 'http://compoundent.com/content/uploads/2016/08/DJ-Khaled-press-photo-head-shot-2016-billboard-650.jpg';
  top_songs: IMusic[];
  albums: IAlbum[]

  constructor(private _artistService: ArtistService) {
    this.top_songs = [];
    this.artistId = '5ab99cc3c7c9231670abd672';
  }

  ngOnInit() {
    this._artistService.fetchArtist(this.artistId)
                       .subscribe((artist: IArtist) => {
                         this.artist_name = artist.username;
                         this.albums = artist.albums.map((album) => {
                           return {
                             title: album.title
                           }
                         })
                         artist.albums.forEach((album) => {
                          album.musics.forEach((music) => {
                            this.top_songs.push(music);
                          })
                         })
                         console.log(this.top_songs);
                       })
  }



}
