import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Input() colors: string[] = [];
  @Output() selectedColor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectColor(color: string) {
    this.selectedColor.next(color);
  }
}
