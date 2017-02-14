import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './containers/main/main.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { NotesComponent } from './containers/notes/notes.component';
import { NoteCardComponent } from './ui/note-card/note-card.component';
import { NoteCreatorComponent } from './ui/note-creator/note-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    NotesComponent,
    NoteCardComponent,
    NoteCreatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
