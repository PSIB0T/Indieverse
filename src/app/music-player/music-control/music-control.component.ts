import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-music-control',
  templateUrl: './music-control.component.html',
  styleUrls: ['./music-control.component.scss']
})
export class MusicControlComponent implements OnInit {

  paused = false;
  constructor() { }
  toggle() {
    this.paused = !this.paused;
  }  

  ngOnInit() {
  }


}
