import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeleeSummaryComponent } from './melee-summary.component';
import { MaterialModule } from 'app/shared/material.module';
import { RouterModule } from '@angular/router';
import { DeferLoadModule } from 'app/shared/defer-load-directive';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    DeferLoadModule
  ],
  declarations: [
    MeleeSummaryComponent
  ],
  exports: [
    MeleeSummaryComponent
  ]
})
export class MeleeSummaryModule { }
