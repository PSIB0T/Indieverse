import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isHam = true;
  class_name = 'fa fa-bars ham'
  constructor() { }

  ngOnInit() {
  }
  toggleHam() {
    if (this.isHam) {
      this.class_name = 'fa fa-times ham';
      this.isHam = false;
    } else {
      this.class_name = 'fa fa-bars ham';
      this.isHam = true;
    }
  }

}
