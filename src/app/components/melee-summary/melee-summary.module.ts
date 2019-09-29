import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeleeSummaryComponent } from './melee-summary.component';
import { MaterialModule } from 'app/shared/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    MeleeSummaryComponent
  ],
  exports: [
    MeleeSummaryComponent
  ]
})
export class MeleeSummaryModule { }
