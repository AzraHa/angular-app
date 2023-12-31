import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { InputClickComponent } from './input-click/input-click.component';
import { ChildComponent } from './child/child.component';
import { ProductsComponent } from './products/products.component';
import { TabContentComponent } from './tab-content/tab-content.component';
import { MyChildComponent } from './my-child-component/my-child-component.component';

@NgModule({
  declarations: [AppComponent],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputClickComponent,
    ProductsComponent,
    TabContentComponent,
    ChildComponent,
    MyChildComponent,
  ],
})
export class AppModule {}
