import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondariesDetailComponent } from './secondaries-detail.component';

const routes: Routes = [{ path: '', component: SecondariesDetailComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class WarframeDetailRoutingModule {}
