import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContribComponent } from './contrib.component';

const routes: Routes = [{ path: '', component: ContribComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ContribRoutingModule { }
