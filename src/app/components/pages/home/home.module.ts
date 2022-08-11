import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SongsListModule } from '../songs-list/songs-list.module';
import { FormSongsModule } from '../form-songs/form-songs.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SongsListModule,
    FormSongsModule
  ]
})
export class HomeModule { }
