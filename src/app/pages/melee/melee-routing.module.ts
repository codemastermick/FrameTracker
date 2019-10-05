import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MeleeComponent } from "./melee.component";

const routes: Routes = [{ path: "", component: MeleeComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class MeleeRoutingModule {}
