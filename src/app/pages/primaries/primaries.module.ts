import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrimariesRoutingModule } from "./primaries-routing.module";
import { PrimariesComponent } from "./primaries.component";
import { MaterialModule } from "../../shared/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { PrimarySummaryModule } from "app/components/primary-summary/primary-summary.module";
import { ScrollingModule } from "@angular/cdk/scrolling";

@NgModule({
  imports: [
    CommonModule,
    PrimariesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    PrimarySummaryModule,
    ScrollingModule
  ],
  declarations: [PrimariesComponent]
})
export class PrimariesModule { }
