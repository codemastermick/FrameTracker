import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarframeDetailRoutingModule } from './secondaries-detail-routing.module';
import { SecondariesDetailComponent } from './secondaries-detail.component';
import { MaterialModule } from '../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DispositionComponent } from 'app/components/disposition/disposition.component';

@NgModule({
  imports: [CommonModule, WarframeDetailRoutingModule, MaterialModule, FlexLayoutModule],
  declarations: [SecondariesDetailComponent, DispositionComponent]
})
export class SecondariesDetailModule { }
