import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeleeDetailRoutingModule } from './melee-detail-routing.module';
import { MeleeDetailComponent } from './melee-detail.component';
import { MaterialModule } from '../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DamageDisplayModule } from 'app/components/damage-display/damage-display.module';
import { ComponentsDisplayModule } from 'app/components/components-display/components-display.module';
import { BuildSectionModule } from 'app/components/build-section/build-section.module';
import { WeaponDetailModule } from 'app/components/weapon-detail/weapon-detail.module';

@NgModule({
  imports: [
    CommonModule,
    MeleeDetailRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    DamageDisplayModule,
    ComponentsDisplayModule,
    BuildSectionModule,
    WeaponDetailModule
  ],
  declarations: [MeleeDetailComponent]
})
export class MeleeDetailModule { }
