import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Input() colors: string[] = [];
  @Output() selectedColor = new EventEmitter();

  isPickerVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  selectColor(color: string) {
    this.showPicker(false);
    this.selectedColor.next(color);
  }

  showPicker(value: boolean) {
    this.isPickerVisible = value;
  }
}
