import {
  Component,
  OnInit,
  Inject,
  forwardRef,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';
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
import { MatToolbarModule } from '@angular/material/toolbar';

interface PeriodicElement {
  place: string;
  city: string;
  country: string;
}

@Component({
  selector: 'app-place-modal',
  templateUrl: './place-modal.component.html',
  styleUrls: ['./place-modal.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    MatToolbarModule,
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
export class PlaceModalComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});
  myControl: FormControl = new FormControl();
  selectedPlace: PeriodicElement | undefined;
  isSearchClicked: boolean = false;

  @Output() parentData = new EventEmitter<any>();

  ELEMENT_DATA: PeriodicElement[] = [
    { place: 'Novi Grad', city: 'Sarajevo', country: 'Bosna i Hercegovina' },
    { place: 'Stari Grad', city: 'Mostar', country: 'Bosna i Hercegovina' },
    { place: 'Centar', city: 'Banja Luka', country: 'Bosna i Hercegovina' },
    { place: 'Zenica-Doboj', city: 'Zenica', country: 'Bosna i Hercegovina' },
    { place: 'Doboj Jug', city: 'Doboj', country: 'Bosna i Hercegovina' },
    {
      place: 'Arapuša',
      city: 'Bosanska Krupa',
      country: 'Bosna i Hercegovina',
    },
  ];

  displayedColumns: string[] = ['place', 'city', 'country'];
  dataSource = this.ELEMENT_DATA;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PlaceModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: null
  ) {
    this.myForm = this.formBuilder.group({
      place: '',
      city: '',
      country: '',
    });
  }

  ngOnInit() {
    this.dataSource = this.ELEMENT_DATA;
  }

  handleRowDoubleClick(element: any) {
    this.selectedPlace = element;
    this.parentData.emit('this.selectedPlace');
    this.dialogRef.close();
  }

  search() {
    this.isSearchClicked = true;
  }

  close() {
    this.dialogRef.close();
  }
}
