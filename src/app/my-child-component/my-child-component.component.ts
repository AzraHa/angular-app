import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-child-component',
  templateUrl: './my-child-component.component.html',
  styleUrls: ['./my-child-component.component.css'],
  standalone: true,
})
export class MyChildComponent {
  @Input() fetchedData: any;
}
