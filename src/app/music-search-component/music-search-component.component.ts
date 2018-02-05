import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {filter} from 'rxjs/operators/filter';
import {debounceTime} from 'rxjs/operators/debounceTime'
import {flatMap} from 'rxjs/operators'

@Component({
  selector: 'app-music-search-component',
  templateUrl: './music-search-component.component.html',
  styleUrls: ['./music-search-component.component.scss']
})
export class MusicSearchComponentComponent implements OnInit {

  musicForm: FormControl = new FormControl();

  $filterLen = filter((x: string) => x.length > 2);

  @Input() tracks: any[] = [];
  @Output() update = new EventEmitter();

  filteredOptions: Observable<any[]>;

  ngOnInit() {
    this.filteredOptions = this.musicForm.valueChanges
      .pipe(
        debounceTime(200),
        this.$filterLen,
        map((val: any) => {
          return this.filter(val);
        })
      );
  }

  select($event) {
    const result = this.filter($event.source.value)
    this.update.emit(result[0])
  }

  filter(val: string): any[] {
    return this.tracks.filter(option =>
      option.title.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

}
