import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarframeDetailRoutingModule } from './primaries-detail-routing.module';
import { PrimariesDetailComponent } from './primaries-detail.component';
import { MaterialModule } from '../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DispositionModule } from '../../components/disposition/disposition.module';

@NgModule({
  imports: [CommonModule, WarframeDetailRoutingModule, MaterialModule, FlexLayoutModule, DispositionModule],
  declarations: [PrimariesDetailComponent]
})
export class PrimariesDetailModule { }
