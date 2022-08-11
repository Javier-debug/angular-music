import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Song } from 'src/app/shared/interface/song.interface';

@Component({
  selector: 'app-form-songs',
  templateUrl: './form-songs.component.html',
  styleUrls: ['./form-songs.component.scss']
})
export class FormSongsComponent implements OnInit {

  @Output() titleToSearch = new EventEmitter<string>();
  @Output() resetTable = new EventEmitter();
  @Output() deleteSongDB = new EventEmitter<string>();
  @Output() addSongDB = new EventEmitter<Song>();
  searchForm: any;
  songForm: any;
  songSelected: any = null;

  constructor() { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      title: new FormControl(""),
    });
    this.songForm = new FormGroup({
      title: new FormControl(""),
      group: new FormControl(""),
      year: new FormControl(0),
      genre: new FormControl(""),
    });
  }

  searchSong(data: any): void {
    this.titleToSearch.emit(data.title);
    this.songSelected = null;
  }

  resetTableSongs(): void {
    this.resetTable.emit();
    this.songSelected = null;
    this.songForm.setValue({
      title: '',
      group: '',
      year: 0,
      genre: '',
    });
  }

  displaySongDetails(song: Song): void {
    this.songSelected = song;
    this.songForm.setValue({
      title: this.songSelected.title,
      group: this.songSelected.group,
      year: this.songSelected.year,
      genre: this.songSelected.genre,
    });
  }

  addSong(data: Song): void {
    this.addSongDB.emit(data);
    this.songSelected = null;
    this.songForm.setValue({
      title: '',
      group: '',
      year: 0,
      genre: '',
    });
  }

  deleteSong(): void {
    if (this.songSelected != null) {
      this.deleteSongDB.emit(this.songSelected._id);
    }
    this.songSelected = null;
    this.songForm.setValue({
      title: '',
      group: '',
      year: 0,
      genre: '',
    });
  }

}
