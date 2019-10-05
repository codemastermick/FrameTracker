import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MeleeDetailComponent } from "./melee-detail.component";

const routes: Routes = [{ path: "", component: MeleeDetailComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class MeleeDetailRoutingModule {}
