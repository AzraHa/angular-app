import { Component, EventEmitter, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-click',
  templateUrl: './input-click.component.html',
  styleUrls: ['./input-click.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class InputClickComponent {
  name: string = '';
  lastName: string = '';
  JMBG: string = '';

  nameError: boolean = false;
  lastNameError: boolean = false;
  JMBGError: boolean = false;

  @Output() buttonClicked = new EventEmitter<any>();

  constructor(
    private appComponent: AppComponent // , private apiService: ApiService
  ) {}

  openDialog() {
    this.buttonClicked.emit('hehehehhehehe');
  }

  openDialog2() {
    this.buttonClicked.emit('hehehehhehehe');
  }

  onEnter() {
    this.resetErrors();

    if (!this.name) {
      this.nameError = true;
    }
    if (!this.lastName) {
      this.lastNameError = true;
    }
    if (!this.JMBG) {
      this.JMBGError = true;
    }

    // Make the API call using the entered values (name, lastname, jmbg)
    // Assuming you have a service called 'apiService' that handles API requests
    //
    // this.apiService
    //   .getData(this.name, this.lastname, this.jmbg)
    //   .subscribe((data) => {
    //     // Pass the returned data to the child component
    //     this.childComponent.data = data;
    //   });

    if (this.name && this.lastName && this.JMBG) {
      this.buttonClicked.emit({
        name: this.name,
        lastName: this.lastName,
        JMBG: this.JMBG,
      });
    }
  }
  resetErrors() {
    this.nameError = false;
    this.lastNameError = false;
    this.JMBGError = false;
  }
}
