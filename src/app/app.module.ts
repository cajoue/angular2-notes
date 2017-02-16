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
import { ColorPickerComponent } from './ui/color-picker/color-picker.component';
import { ApiService } from './services/api.service';
import { NotesService } from './services/notes.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    NotesComponent,
    NoteCardComponent,
    NoteCreatorComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService, NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
