import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DamageBreakdownComponent } from './damage-breakdown.component';
import { MaterialModule } from 'app/shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    DamageBreakdownComponent
  ],
  exports: [
    DamageBreakdownComponent
  ]
})
export class DamageBreakdownModule { }
