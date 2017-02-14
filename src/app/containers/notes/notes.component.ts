import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes = [
    { title: 'House move', value: 'pack boxes', color: 'lightblue' },
    { title: 'Exercise', value: 'HIIT training', color: 'orange' },
    { title: 'Dogs', value: 'Look for adoptable dogs', color: 'gold' }
  ];

  constructor() { }

  ngOnInit() {
  }

  onNoteChecked(i: number){
    this.notes.splice(i, 1);
  }

  onCreateNote(note) {
    this.notes.push(note);
  }
}
