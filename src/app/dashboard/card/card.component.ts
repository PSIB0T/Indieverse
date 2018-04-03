import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoadMusic } from './../loadMusic.service';
import { IMusic } from '../../music-player/classes/iMusic';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() contents;
  @Input() currentMusics: IMusic[];
  @Input() isSelect: boolean;
  @Output() loadMusicEvent;
  @Output() playMusic;
  constructor(private _loadMusic: LoadMusic) {
    this.loadMusicEvent = new EventEmitter();
    this.playMusic = new EventEmitter();
  }

  loadMusic(name: string) {
    this.loadMusicEvent.emit(name);
  }

  selectMusic(id: string) {
    this.playMusic.emit(id);
  }

  ngOnInit() {
  }

}
