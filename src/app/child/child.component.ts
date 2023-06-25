import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Output() buttonClicked = new EventEmitter<any>();

  ngOnInit() {}

  clickButton() {
    this.buttonClicked.emit('heheheh');
  }
}
