import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.css']
})
export class NoteCreatorComponent implements OnInit {
  @Output() createNote = new EventEmitter();

  newNote = {
    title: '',
    value: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onCreateNote() {
    const { title, value } = this.newNote;

    if (title && value) {
      this.createNote.next({ title, value });
    }

    this.reset();
  }

  reset() {
    this.newNote = {
      title: '',
      value: ''
    };
  }
}
