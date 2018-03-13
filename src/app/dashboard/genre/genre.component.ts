import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  genres = [{
    name: 'Heavy Metal',
    image: require('assets/images/icons/metal.svg'),
  }, {
    name: 'Party',
    image: require('assets/images/icons/disco.svg'),
  }, {
    name: 'Jazz',
    image: require('assets/images/icons/jazz.svg'),
  }, {
    name: 'Rock',
    image: require('assets/images/icons/rock.svg'),
  }, {
    name: 'Techno',
    image: require('assets/images/icons/techno.svg'),
  }, {
    name: 'Classical',
    image: require('assets/images/icons/classical.svg'),
  ]
  constructor() { }

  ngOnInit() {
  }

}
