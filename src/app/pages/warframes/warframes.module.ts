import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WarframesRoutingModule } from "./warframes-routing.module";
import { WarframesComponent } from "./warframes.component";
import { MaterialModule } from "../../shared/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { WfSummaryComponent } from "app/components/wf-summary/wf-summary.component";
import { ScrollingModule } from "@angular/cdk/scrolling";

@NgModule({
  imports: [
    CommonModule,
    WarframesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ScrollingModule
  ],
  declarations: [WarframesComponent, WfSummaryComponent]
})
export class WarframesModule { }
