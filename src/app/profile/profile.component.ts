import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  artist_name: string = "DJ Khaled";
  artist_desc: string = "Khaled Mohamed Khaled (born November 26, 1975) is an American record producer, radio personality, DJ, record label executive and author. He was a radio host for the Miami-based urban music radio station WEDR 99 Jamz and the DJ for the hip hop group Terror Squad. From 2004 to 2006, Khaled assisted in the production of the hip-hop albums Real Talk by Fabolous, True Story by Terror Squad, All or Nothing and Me, Myself, & I by Fat Joe."
  artist_img_url: string = "http://compoundent.com/content/uploads/2016/08/DJ-Khaled-press-photo-head-shot-2016-billboard-650.jpg";
  top_songs = ['I am the one','Wild Thoughts','Do You Mind','All I Do Is Win','Hold You Down'];
  constructor() { }

  ngOnInit() {
  }



}
