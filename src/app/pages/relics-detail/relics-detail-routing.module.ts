import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelicsDetailComponent } from './relics-detail.component';

const routes: Routes = [{ path: '', component: RelicsDetailComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class RelicsDetailRoutingModule {}
