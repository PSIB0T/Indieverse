import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  musicId = '5ab99cc3c7c9231670abd679';
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
