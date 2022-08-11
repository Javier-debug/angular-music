import { Component, OnInit, ViewChild } from '@angular/core';
import { Song } from 'src/app/shared/interface/song.interface';
import { FormSongsComponent } from '../form-songs/form-songs.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('list') songsList:any;
  @ViewChild('songForm') songForm:any;

  constructor() { }

  ngOnInit(): void {
  }

  titleToSearch(title: string): void {
    this.songsList.searchTitle(title);
  }

  resetTable(): void {
    this.songsList.getAllSongs();
  }

  songSelected(song: Song): void {
    this.songForm.displaySongDetails(song);
  }

  deleteSong(_id: string): void {
    this.songsList.deleteSong(_id);
  }

  addSong(song: Song): void {
    this.songsList.addSong(song);
  }

}
