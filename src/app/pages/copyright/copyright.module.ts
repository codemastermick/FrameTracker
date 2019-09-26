import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyrightRoutingModule } from './copyright-routing.module';
import { CopyrightComponent } from './copyright.component';
import { MaterialModule } from '../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, CopyrightRoutingModule, MaterialModule, FlexLayoutModule],
  declarations: [CopyrightComponent]
})
export class CopyrightModule { }
