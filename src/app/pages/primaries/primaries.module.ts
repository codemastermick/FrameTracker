import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimariesRoutingModule } from './primaries-routing.module';
import { PrimariesComponent } from './primaries.component';
import { MaterialModule } from '../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PrimarySummaryComponent } from '../../components/primary-summary/primary-summary.component';

@NgModule({
  imports: [CommonModule, PrimariesRoutingModule, MaterialModule, FlexLayoutModule],
  declarations: [PrimariesComponent, PrimarySummaryComponent]
})
export class PrimariesModule { }
