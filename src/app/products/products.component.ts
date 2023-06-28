import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class ProductsComponent {
  rowIndex = 0;
  displayedColumns: string[] = ['place', 'city', 'country'];
  items = [
    { id: 1, name: 'Prvi element' },
    { id: 2, name: 'Drugi element' },
    { id: 3, name: 'Treći element' },
  ];

  ELEMENT_DATA: any[] = [
    { place: 'Novi Grad', city: 'Sarajevo', country: 'Bosna i Hercegovina' },
    { place: 'Stari Grad', city: 'Mostar', country: 'Bosna i Hercegovina' },
  ];
  dataSource = this.ELEMENT_DATA;
}
