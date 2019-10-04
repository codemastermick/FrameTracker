import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarframeDetailRoutingModule } from './secondaries-detail-routing.module';
import { SecondariesDetailComponent } from './secondaries-detail.component';
import { MaterialModule } from '../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DispositionModule } from 'app/components/disposition/disposition.module';
import { DamageBreakdownModule } from 'app/components/damage-breakdown/damage-breakdown.module';
import { DamageDisplayModule } from 'app/components/damage-display/damage-display.module';
import { ComponentsDisplayModule } from 'app/components/components-display/components-display.module';
import { SecondarySummaryModule } from 'app/components/secondary-summary/secondary-summary.module';

@NgModule({
  imports: [
    CommonModule,
    WarframeDetailRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    DispositionModule,
    DamageBreakdownModule,
    DamageDisplayModule,
    ComponentsDisplayModule,
    SecondarySummaryModule
  ],
  declarations: [SecondariesDetailComponent]
})
export class SecondariesDetailModule { }
