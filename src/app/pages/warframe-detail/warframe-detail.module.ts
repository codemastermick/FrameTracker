import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WarframeDetailRoutingModule } from "./warframe-detail-routing.module";
import { WarframeDetailComponent } from "./warframe-detail.component";
import { MaterialModule } from "../../shared/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [CommonModule, WarframeDetailRoutingModule, MaterialModule, FlexLayoutModule],
  declarations: [WarframeDetailComponent]
})
export class WarframesDetailModule { }
