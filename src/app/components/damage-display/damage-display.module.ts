import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DamageDisplayComponent } from "./damage-display.component";
import { MaterialModule } from "app/shared/material.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    DamageDisplayComponent
  ],
  exports: [
    DamageDisplayComponent
  ]
})
export class DamageDisplayModule { }
