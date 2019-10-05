import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsDisplayComponent } from "./components-display.component";
import { MaterialModule } from "app/shared/material.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    ComponentsDisplayComponent
  ],
  exports: [
    ComponentsDisplayComponent
  ]
})
export class ComponentsDisplayModule { }
