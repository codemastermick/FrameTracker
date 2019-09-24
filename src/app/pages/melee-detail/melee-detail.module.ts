import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeleeDetailRoutingModule } from './melee-detail-routing.module';
import { MeleeDetailComponent } from './melee-detail.component';
import { MaterialModule } from '../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DispositionModule } from 'app/components/disposition/disposition.module';

@NgModule({
  imports: [CommonModule, MeleeDetailRoutingModule, MaterialModule, FlexLayoutModule, DispositionModule],
  declarations: [MeleeDetailComponent]
})
export class MeleeDetailModule { }
