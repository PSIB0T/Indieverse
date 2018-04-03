import { Component,
         OnInit,
         HostListener,
         ViewChild,
         ElementRef,
         AfterViewInit} from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { LoadMusic } from '../loadMusic.service';
import { IMusic } from '../../music-player/classes/iMusic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit, AfterViewInit {

  songs: IMusic[]
  @ViewChild('browserNav', {read: ElementRef}) browser_nav: ElementRef;
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('dlist') dlist: ElementRef;

  constructor(private loadMusicService: LoadMusic, private router: Router) { }

  ngOnInit() {
    let searchTerm: string;
    Observable.fromEvent(this.searchInput.nativeElement, 'keyup')
              .map((res: any) => res.target.value)
              .debounceTime(500)
              .flatMap((res: string) => {
                searchTerm = res;
                return this.loadMusicService.searchMusic(res)
              })
              .subscribe((res) => {
                let list = Array.prototype.slice.call(this.dlist.nativeElement.children);
                list = list.map((l) => l.value);
                if (list.indexOf(searchTerm) !== -1) {
                  this.selectSong()
                }
                this.songs = res;
              })
  }

  selectSong() {
    this.router.navigate(['player', this.songs[0].id])
  }
  ngAfterViewInit() {
  }

}
