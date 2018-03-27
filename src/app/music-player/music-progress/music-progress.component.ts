import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-music-progress',
  templateUrl: './music-progress.component.html',
  styleUrls: ['./music-progress.component.scss']
})
export class MusicProgressComponent implements OnInit {
  @Input() position;
  @Input() elapsed: string;
  @Input() duration: string;
  @Output() updatePosition: EventEmitter<number>;
  constructor() {
    this.updatePosition = new EventEmitter();
  }

  ngOnInit() {
  }
  clicked($event) {
    let x_pos: number = $event.pageX;
    const progressBar = $event.path[0];
    x_pos -= progressBar.offsetLeft
    const new_pos: number = (progressBar.max * (x_pos)) / progressBar.offsetWidth
    this.updatePosition.emit(new_pos);
  }


}
