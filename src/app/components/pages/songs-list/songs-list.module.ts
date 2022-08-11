import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongsListRoutingModule } from './songs-list-routing.module';
import { SongsListComponent } from './songs-list.component';
import { MatTableModule } from '@angular/material/table'


@NgModule({
  declarations: [
    SongsListComponent
  ],
  imports: [
    CommonModule,
    SongsListRoutingModule,
    MatTableModule
  ],
  exports: [SongsListComponent]
})
export class SongsListModule { }
