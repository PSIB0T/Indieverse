import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-music-control',
  templateUrl: './music-control.component.html',
  styleUrls: ['./music-control.component.scss']
})
export class MusicControlComponent implements OnInit {

  @Input() paused = false;
  @Output() pause = new EventEmitter();
  constructor() { }
  toggle() {
    this.paused = !this.paused;
    this.pause.emit();
  }

  ngOnInit() {
  }


}
