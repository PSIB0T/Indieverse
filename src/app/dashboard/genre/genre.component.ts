import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  genres = [{
    name: 'Heavy Metal',
    image: 'assets/images/icons/metal.svg',
  }, {
    name: 'Party',
    image: 'assets/images/icons/disco.svg',
  }, {
    name: 'Jazz',
    image: 'assets/images/icons/jazz.svg',
  }, {
    name: 'Rock',
    image: 'assets/images/icons/rock.svg',
  }, {
    name: 'Techno',
    image: 'assets/images/icons/techno.svg',
  }, {
    name: 'Classical',
    image: 'assets/images/icons/classical.svg',
  }]
  constructor() { }

  ngOnInit() {
  }

}
