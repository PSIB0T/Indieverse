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
  cover_image: string;
  top_songs: IMusic[];
  albums: IAlbum[]

  constructor(private _artistService: ArtistService) {
    this.top_songs = [];
    this.artistId = '5ab9e960de66771fdbe92417';
  }

  ngOnInit() {
    this._artistService.fetchArtist(this.artistId)
                       .subscribe((artist: IArtist) => {
                         this.artist_name = artist.username;
                         this.cover_image = artist.coverImage;
                         this.albums = artist.albums.map((album) => {
                           return {
                             id: album.id,
                             title: album.title,
                             albumArt: album.albumArt
                           }
                         })
                         artist.albums.forEach((album) => {
                          album.musics.forEach((music) => {
                            this.top_songs.push(music);
                          })
                         })
                         this.top_songs = this.top_songs.slice(0, 10)
                       })
  }
}
