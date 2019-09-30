import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeleeRoutingModule } from './melee-routing.module';
import { MeleeComponent } from './melee.component';
import { MaterialModule } from '../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MeleeSummaryModule } from 'app/components/melee-summary/melee-summary.module';

@NgModule({
  imports: [
    CommonModule,
    MeleeRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    MeleeSummaryModule
  ],
  declarations: [MeleeComponent]
})
export class MeleeModule { }
