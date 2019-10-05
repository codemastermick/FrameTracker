import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SecondariesRoutingModule } from "./secondaries-routing.module";
import { SecondariesComponent } from "./secondaries.component";
import { MaterialModule } from "../../shared/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { SecondarySummaryModule } from "app/components/secondary-summary/secondary-summary.module";

@NgModule({
  imports: [
    CommonModule,
    SecondariesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ScrollingModule,
    SecondarySummaryModule
  ],
  declarations: [SecondariesComponent]
})
export class SecondariesModule { }
