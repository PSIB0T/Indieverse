import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  artists = [{
    name: 'DJ Khaled',
    image: 'https://images.complex.com/complex/image/upload/c_fill,f_auto,g_faces:auto,h_900,q_auto,w_900/m6mjx9nhyk72xtqj3e2p.jpg',
    sub_count: 13232
  }, {
    name: 'Ed Sheeran',
    image: 'https://images.shazam.com/artistart/a40769350_s400.jpg',
    sub_count: 324143
  }, {
    name: 'Britney Spears',
    image: 'https://pbs.twimg.com/profile_images/955803874463571969/-R8etznz_400x400.jpg',
    sub_count: 306144
  }]
  constructor() { }

  ngOnInit() {
  }

}
