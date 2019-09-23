import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarframesComponent } from './warframes.component';

const routes: Routes = [{ path: '', component: WarframesComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class WarframesRoutingModule {}
