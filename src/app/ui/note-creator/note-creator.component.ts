import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.css']
})
export class NoteCreatorComponent implements OnInit {
  @Output() createNote = new EventEmitter();
  colors: string[] = ["#7fcaff","#a77fff","#ff7fb0","#ffbd7e","#f3ff7e","#caf562","#62f5c8", "white"];

  newNote = {
    title: '',
    value: ''
  }

  fullForm: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onCreateNote() {
    const { title, value } = this.newNote;

    if (title && value) {
      this.createNote.next({ title, value });
    }

    this.reset();
    this.toggleFullForm(false);
  }

  reset() {
    this.newNote = {
      title: '',
      value: ''
    };
  }

  toggleFullForm(value: boolean) {
    this.fullForm = value;
  }
}
