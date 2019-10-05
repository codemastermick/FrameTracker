import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContribRoutingModule } from "./contrib-routing.module";
import { ContribComponent } from "./contrib.component";
import { MaterialModule } from "../../shared/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [CommonModule, ContribRoutingModule, MaterialModule, FlexLayoutModule],
  declarations: [ContribComponent]
})
export class ContribModule { }
