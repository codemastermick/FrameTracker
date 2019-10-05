import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarframeDetailRoutingModule } from './primaries-detail-routing.module';
import { PrimariesDetailComponent } from './primaries-detail.component';
import { MaterialModule } from '../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DispositionModule } from '../../components/disposition/disposition.module';
import { DamageDisplayModule } from 'app/components/damage-display/damage-display.module';
import { ComponentsDisplayModule } from 'app/components/components-display/components-display.module';
import { DamageBreakdownModule } from 'app/components/damage-breakdown/damage-breakdown.module';
import { BuildSectionModule } from 'app/components/build-section/build-section.module';

@NgModule({
  imports: [
    CommonModule,
    WarframeDetailRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    DispositionModule,
    DamageDisplayModule,
    ComponentsDisplayModule,
    DamageBreakdownModule,
    BuildSectionModule
  ],
  declarations: [PrimariesDetailComponent]
})
export class PrimariesDetailModule { }
