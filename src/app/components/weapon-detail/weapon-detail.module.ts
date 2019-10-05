import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeaponDetailComponent } from "./weapon-detail.component";
import { MaterialModule } from "app/shared/material.module";
import { DispositionModule } from "../disposition/disposition.module";
import { DamageBreakdownModule } from "../damage-breakdown/damage-breakdown.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DispositionModule,
    DamageBreakdownModule
  ],
  declarations: [
    WeaponDetailComponent
  ],
  exports: [
    WeaponDetailComponent
  ]
})
export class WeaponDetailModule { }
