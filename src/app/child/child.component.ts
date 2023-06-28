import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChildComponent {
  @Output() buttonClicked = new EventEmitter<any>();

  ngOnInit() {}

  clickButton() {
    this.buttonClicked.emit('heheheh');
  }
}
