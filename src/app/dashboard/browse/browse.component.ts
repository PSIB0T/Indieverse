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
import { IArtist } from '../../music-player/classes/iArtist';
import { IAlbum } from '../../music-player/classes/iAlbum';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit, AfterViewInit {

  songs: IMusic[]
  albums: IAlbum[]
  searchState: boolean;
  @ViewChild('browserNav', {read: ElementRef}) browser_nav: ElementRef;
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('dlist') dlist: ElementRef;

  constructor(private loadMusicService: LoadMusic, private router: Router) {
    this.searchState = false;
  }

  ngOnInit() {
    let searchTerm: string;
    Observable.fromEvent(this.searchInput.nativeElement, 'keyup')
              .map((res: any) => res.target.value)
              .debounceTime(500)
              .flatMap((res: string) => {
                searchTerm = res;
                return this.loadMusicService.searchMusic(res)
              })
              .flatMap((res) => {
                this.songs = res.slice(0, 3);
                return this.loadMusicService.searchAlbum(searchTerm);
              })
              .subscribe((res) => {
                this.albums = res.slice(0, 3);
              }, (err) => {
                console.log(err);
              })
    Observable.fromEvent(this.searchInput.nativeElement, 'click')
              .subscribe((res) => {
                console.log('Clicked');
                this.searchState = true;
              })
  }

  selectSong(song) {
    this.router.navigate(['player', song.id])
  }

  selectAlbum(album: IAlbum) {
    this.router.navigate(['album', album.id])
  }
  ngAfterViewInit() {
  }

}
