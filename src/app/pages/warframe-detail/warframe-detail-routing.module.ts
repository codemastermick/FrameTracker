import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarframeDetailComponent } from './warframe-detail.component';

const routes: Routes = [{ path: '', component: WarframeDetailComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class WarframeDetailRoutingModule {}
