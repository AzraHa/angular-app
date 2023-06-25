import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PlaceModalComponent } from '../place-modal/place-modal.component';

@Component({
  selector: 'app-country-modal',
  templateUrl: './country-modal.component.html',
  styleUrls: ['../place-modal/place-modal.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ''),
      multi: true,
    },
  ],
})
export class CountryModalComponent implements OnInit {
  isSearchClicked: boolean = false;
  displayedColumns: string[] = ['countryCode', 'country'];
  myForm: FormGroup = new FormGroup({});
  myControl: FormControl = new FormControl();
  selectedPlace: any;

  ELEMENT_DATA: any[] = [
    {
      countryCode: '077',
      country: 'Bosna i Hercegovina',
    },
    {
      countryCode: '077',
      country: 'Bosna i Hercegovina',
    },
    {
      countryCode: '077',
      country: 'Bosna i Hercegovina',
    },
    {
      countryCode: '077',
      country: 'Bosna i Hercegovina',
    },
    { countryCode: '077', country: 'Bosna i Hercegovina' },
    {
      countryCode: '077',
      country: 'Bosna i Hercegovina',
    },
  ];

  dataSource = this.ELEMENT_DATA;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PlaceModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: null
  ) {
    this.myForm = this.formBuilder.group({
      countryCode: '',
      country: '',
    });
  }

  ngOnInit(): void {}

  handleRowDoubleClick(element: any) {
    this.selectedPlace = element;
  }

  search() {
    this.isSearchClicked = true;
  }

  close() {
    this.dialogRef.close();
  }
}
