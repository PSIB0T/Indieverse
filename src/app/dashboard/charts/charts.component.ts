import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  charts = [{
    name: 'India Top 10',
    image: 'assets/images/icons/india.svg'
  }, {
    name: 'USA Top 10',
    image: 'assets/images/icons/usa.svg'
  }, {
    name: 'World Top 10',
    image: 'assets/images/icons/world.svg'
  }];
  constructor() { }

  ngOnInit() {
  }

}
