import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.scss']
})
export class MusicDetailsComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
