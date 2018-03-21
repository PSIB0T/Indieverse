import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isHam = true;
  isPhone;
  class_name;
  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isPhone = window.screen.width > 530 ? false : true;
  }

  ngOnInit() {
    this.isHam = window.screen.width > 530 || !this.isPhone ? false : true;
    this.class_name = this.isHam ? 'fa fa-bars ham' : 'fa fa-times ham';
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
