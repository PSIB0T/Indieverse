import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  @Input() elapsed: string;
  // Total time
  @Input() total: string;
  // Current time for the progress bar
  @Input() current: number;

  @Output() updatePosition: EventEmitter<number>;
  constructor() {
    this.updatePosition = new EventEmitter<number>();
  }

  clicked($event) {
    let x_pos: number = $event.pageX;
    const progressBar = $event.path[0];
    x_pos -= progressBar.offsetLeft
    const new_pos: number = (progressBar.max * (x_pos)) / progressBar.offsetWidth
    this.updatePosition.emit(new_pos);
  }

  ngOnInit() {
  }

}
