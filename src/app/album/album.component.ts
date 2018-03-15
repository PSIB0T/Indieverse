import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  album_name: String = "Major Key";
  // album_desc: String = "";
  // album_art_url: string = "";
  album_artist: String = "DJ Khaled";
  // album_date = ;
  album_songs = ['I am the one', 'Wild Thoughts', 'Do You Mind', 'All I Do Is Win', 'Hold You Down'];

  constructor() { }

  ngOnInit() {
  }

}
