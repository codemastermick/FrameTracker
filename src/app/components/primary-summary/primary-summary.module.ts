import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrimarySummaryComponent } from "./primary-summary.component";
import { MaterialModule } from "app/shared/material.module";
import { RouterModule } from "@angular/router";
import { DeferLoadModule } from "app/shared/defer-load-directive";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    DeferLoadModule
  ],
  declarations: [
    PrimarySummaryComponent
  ],
  exports: [
    PrimarySummaryComponent
  ]
})
export class PrimarySummaryModule { }
