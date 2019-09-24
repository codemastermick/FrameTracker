import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondariesRoutingModule } from './secondaries-routing.module';
import { SecondariesComponent } from './secondaries.component';
import { MaterialModule } from '../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SecondarySummaryComponent } from 'app/components/secondary-summary/secondary-summary.component';

@NgModule({
  imports: [CommonModule, SecondariesRoutingModule, MaterialModule, FlexLayoutModule],
  declarations: [SecondariesComponent, SecondarySummaryComponent]
})
export class SecondariesModule { }
