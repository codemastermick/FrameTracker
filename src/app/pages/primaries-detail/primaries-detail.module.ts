import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarframeDetailRoutingModule } from './primaries-detail-routing.module';
import { PrimariesDetailComponent } from './primaries-detail.component';
import { MaterialModule } from '../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DispositionComponent } from 'app/components/disposition/disposition.component';

@NgModule({
  imports: [CommonModule, WarframeDetailRoutingModule, MaterialModule, FlexLayoutModule],
  declarations: [PrimariesDetailComponent, DispositionComponent]
})
export class PrimariesDetailModule { }
