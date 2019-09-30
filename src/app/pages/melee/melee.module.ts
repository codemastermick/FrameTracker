import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeleeRoutingModule } from './melee-routing.module';
import { MeleeComponent } from './melee.component';
import { MaterialModule } from '../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MeleeSummaryComponent } from 'app/components/melee-summary/melee-summary.component';

@NgModule({
  imports: [
    CommonModule,
    MeleeRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [MeleeComponent, MeleeSummaryComponent]
})
export class MeleeModule { }
