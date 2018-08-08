import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { C1Component } from '../components/c1/c1.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    C1Component
  ],
  declarations: [
    C1Component
  ]
})
export class MaterialModule { }
