import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.scss']
})
export class MusicDetailsComponent implements OnInit {
  @Input() title: String = 'Default title';
  @Input() albumTitle: String = 'Default album title';
  @Input() artistName: String = 'Default artist';
  @Input() coverArt: String;
  constructor() { }

  ngOnInit() {
  }

}
