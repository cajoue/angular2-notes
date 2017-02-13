import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {
  @Input() note = {};
  showCheck: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onChecked() {
    console.log('clicked a note');
  }

  toggleCheck() {
    this.showCheck = !this.showCheck;
  }

}
