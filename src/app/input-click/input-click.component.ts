import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-click',
  templateUrl: './input-click.component.html',
  styleUrls: ['./input-click.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class InputClickComponent {
  @Output() buttonClicked = new EventEmitter<any>();

  constructor(private appComponent: AppComponent) {}

  openDialog() {
    this.buttonClicked.emit('hehehehhehehe');
    // this.appComponent.openCountriesDialog(null);
  }

  openDialog2() {
    this.buttonClicked.emit('hehehehhehehe');

    // this.appComponent.openPlacesDialog(null);
  }
}
