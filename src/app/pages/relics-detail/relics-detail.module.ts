import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RelicsDetailRoutingModule } from "./relics-detail-routing.module";
import { RelicsDetailComponent } from "./relics-detail.component";
import { MaterialModule } from "../../shared/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DispositionModule } from "app/components/disposition/disposition.module";

@NgModule({
  imports: [CommonModule, RelicsDetailRoutingModule, MaterialModule, FlexLayoutModule, DispositionModule],
  declarations: [RelicsDetailComponent]
})
export class RelicsDetailModule { }
