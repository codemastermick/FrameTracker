import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrimariesDetailComponent } from "./primaries-detail.component";

const routes: Routes = [{ path: "", component: PrimariesDetailComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class WarframeDetailRoutingModule {}
