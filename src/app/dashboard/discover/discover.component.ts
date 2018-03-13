import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  discovers = [{
    name: 'India Top 10',
    image: require('assets/images/icons/india.svg')
  }]
  constructor() { }

  ngOnInit() {
  }

}
