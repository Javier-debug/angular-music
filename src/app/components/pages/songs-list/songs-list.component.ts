import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Song } from 'src/app/shared/interface/song.interface';
import { SongsService } from 'src/app/shared/services/songs.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  @Output() songSelected = new EventEmitter();

  songs: any[] = [];

  constructor(private api: SongsService) { }

  ngOnInit(): void {
    this.api.getAllSongs().subscribe((response: any) => {
      console.log(response);
     this.songs = response;
     for(var i = 0; i < this.songs.length; i++) {
      this.songs[i] = {...this.songs[i], position: i + 1}  
    }
    });
  }

  displayedColumns: string[] = ['position', 'titulo', 'grupo', 'año', 'genero'];

  songSelection(song: Song): void {
    //console.log(song._id);
    this.songSelected.emit(song);
  }

  searchTitle(title: string): void {
    this.api.getSongsByTitle(title).subscribe((response: any) => {
      this.songs = response;
      for(var i = 0; i < this.songs.length; i++) {
        this.songs[i] = {...this.songs[i], position: i + 1}  
      }
      this.table.renderRows();
    });
  }

  getAllSongs(): void {
    this.api.getAllSongs().subscribe((response: any) => {
      console.log(response);
     this.songs = response;
     for(var i = 0; i < this.songs.length; i++) {
      this.songs[i] = {...this.songs[i], position: i + 1}  
    }
    this.table.renderRows();
    });
    
  }

  deleteSong(_id: string): void {
    this.api.deleteSong(_id).subscribe((response: any) => {
      console.log(response);
      this.getAllSongs();
    });
    
  }

  addSong(song: Song): void {
    this.api.addSong(song).subscribe((response: any) => {
      console.log(response);
      this.getAllSongs();
    });
  }
}
