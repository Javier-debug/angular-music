import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Song } from "../interface/song.interface";
import { BehaviorSubject, take, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  url: string = "https://dry-shore-91163.herokuapp.com/songs";
  songs$: Song[] = [];

  constructor(private http: HttpClient){}

  public getAllSongs() {
    return this.http.get(this.url);
  }

  public getSongsByTitle(title: string) {
    return this.http.get(this.url + "/findByTitle/" + title);
  }

  public deleteSong(_id: string) {
    return this.http.delete(this.url + "/" + _id);
  }

  public addSong(song: Song) {
    return this.http.post(this.url, song);
  }
}