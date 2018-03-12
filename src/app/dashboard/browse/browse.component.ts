import { Component,
         OnInit,
         HostListener,
         ViewChild,
         ElementRef } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  @ViewChild('browserNav', {read: ElementRef}) browser_nav: ElementRef;
  constructor() { }

  ngOnInit() {
  }

}
