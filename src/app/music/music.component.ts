import { Component, OnInit } from '@angular/core';
import { MusicService } from 'app/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
    paused = false;
    title: string;
    backgroundStyle: any;
    position = 0;
    elapsed: string;
    duration: string;

    tracks: any[] = [];
    constructor(private musicService: MusicService) {

    }
    ngOnInit() {
      this.musicService.getPlaylistTracks().subscribe(tracks => {
        this.tracks = tracks;
        this.handleRandom();
      });
      // On song end
      this.musicService.audio.onended = this.handleEnded.bind(this);
      // On play time update
      this.musicService.audio.ontimeupdate = this.handleTimeUpdate.bind(this);
    }

    handleEnded(e) {
      this.handleRandom();
    }

    handleUpdatePosition(new_pos: number) {
      let duration: number =  this.musicService.audio.duration;
      this.position = new_pos;
      duration *= new_pos;
      this.musicService.audio.currentTime = duration;
      this.elapsed = this.musicService.formatTime(this.musicService.audio.currentTime);
    }

    handleTimeUpdate(e) {
      const elapsed: number =  this.musicService.audio.currentTime;
      const duration: number =  this.musicService.audio.duration;
      if (!isNaN(duration)) {
        this.position = elapsed / duration;
      }
      this.elapsed = this.musicService.formatTime(elapsed);
      this.duration = this.musicService.formatTime(duration);
    }

    playMusic(track) {

      this.musicService.play(track.stream_url)
      // Set the title property
      this.title = track.title;
      // // Create a background based on the playing song
      this.backgroundStyle = this.composeBackgroundStyle(track.artwork_url)
    }

    handleRandom() {
      const randomTrack = this.musicService.randomTrack(this.tracks);
      this.playMusic(randomTrack)

    }

    handlePausePlay() {
      if (this.musicService.audio.paused) {
        this.paused = false;
        this.musicService.audio.play()
      } else {
        this.paused = true;
        this.musicService.audio.pause()
      }
    }

    handleStop() {
      this.musicService.audio.pause();
      this.musicService.audio.currentTime = 0;
      this.paused = true;
    }

    composeBackgroundStyle(url) {
      return {
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),   url(${this.musicService.xlArtwork(url)})`
      }
  }
}
