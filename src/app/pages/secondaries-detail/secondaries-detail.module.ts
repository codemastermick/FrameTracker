import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarframeDetailRoutingModule } from './secondaries-detail-routing.module';
import { SecondariesDetailComponent } from './secondaries-detail.component';
import { MaterialModule } from '../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DispositionModule } from 'app/components/disposition/disposition.module';

@NgModule({
  imports: [CommonModule, WarframeDetailRoutingModule, MaterialModule, FlexLayoutModule, DispositionModule],
  declarations: [SecondariesDetailComponent]
})
export class SecondariesDetailModule { }
