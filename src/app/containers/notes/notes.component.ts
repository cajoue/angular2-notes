import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  /*notes = [
    { title: 'House move', value: 'pack boxes', color: 'lightblue' },
    { title: 'Exercise', value: 'HIIT training', color: 'orange' },
    { title: 'Dogs', value: 'Look for adoptable dogs', color: 'gold' }
  ];*/

  notes = [];

  constructor(private noteService: NotesService) { 
    this.noteService.getNotes()
                    .subscribe(resp => this.notes = resp.data);
  }

  ngOnInit() {
  }

  /*onNoteChecked(i: number){
    this.notes.splice(i, 1);
  }*/

  onNoteChecked(note) {
    this.noteService.completeNote(note)
                    .subscribe(note => {
                      const i = this.notes.findIndex(localNote => localNote.id === note.id);
                      this.notes.splice(i, 1);                  
                    })
  }

  onCreateNote(note) {
    /*this.notes.push(note);*/ 
    this.noteService.createNote(note)
                    .subscribe(note => this.notes.push(note));

  }
}
