import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelicsRoutingModule } from './relics-routing.module';
import { RelicsComponent } from './relics.component';
import { MaterialModule } from '../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RelicSummaryComponent } from 'app/components/relic-summary/relic-summary.component';

@NgModule({
  imports: [CommonModule, RelicsRoutingModule, MaterialModule, FlexLayoutModule],
  declarations: [RelicsComponent, RelicSummaryComponent]
})
export class RelicsModule { }
