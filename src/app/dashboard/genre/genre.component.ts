import { Component, OnInit } from '@angular/core';
import { LoadMusic } from '../loadMusic.service';
import { IMusic } from '../../music-player/classes/iMusic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  isSelect: boolean;
  currentMusics: IMusic[];

  genres = [{
    name: 'Heavy Metal',
    image: 'assets/images/icons/metal.svg',
    type: 'Genre'
  }, {
    name: 'Party',
    image: 'assets/images/icons/disco.svg',
    type: 'Genre'
  }, {
    name: 'Jazz',
    image: 'assets/images/icons/jazz.svg',
    type: 'Genre'
  }, {
    name: 'Rock',
    image: 'assets/images/icons/rock.svg',
    type: 'Genre'
  }, {
    name: 'Techno',
    image: 'assets/images/icons/techno.svg',
    type: 'Genre'
  }, {
    name: 'Classical',
    image: 'assets/images/icons/classical.svg',
    type: 'Genre'
  }]
  constructor(private _loadMusic: LoadMusic, private _router: Router) {
    this.isSelect = false;
    this.currentMusics = [];
   }

  ngOnInit() {
  }

  loadMusic(name: string) {
      console.log(name);
      this._loadMusic.loadFromGenre(name.toLowerCase())
                    .subscribe((res: IMusic[]) => {
                      this.isSelect = true;
                      this.currentMusics = res;
                      console.log(res);
                    })
  }

  playMusic(id: string) {
    this._router.navigate(['player', id]);
  }

}
