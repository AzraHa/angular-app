import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CountryModalComponent } from './country-modal/country-modal.component';
import { PlaceModalComponent } from './place-modal/place-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isDialogOpen = false;

  constructor(public dialog: MatDialog) {}

  openCountriesDialog(data: any): void {
    if (!this.isDialogOpen) {
      this.isDialogOpen = true;

      const dialogRef: MatDialogRef<any> = this.dialog.open(
        CountryModalComponent,
        {
          data,
          panelClass: 'center-modal',
        }
      );

      dialogRef.afterClosed().subscribe(() => {
        this.isDialogOpen = false;
      });
    }
  }

  openPlacesDialog(data: any): void {
    if (!this.isDialogOpen) {
      this.isDialogOpen = true;

      const dialogRef: MatDialogRef<any> = this.dialog.open(
        PlaceModalComponent,
        {
          data,
          panelClass: 'center-modal',
        }
      );

      dialogRef.afterClosed().subscribe(() => {
        this.isDialogOpen = false;
      });
    }
  }
}
