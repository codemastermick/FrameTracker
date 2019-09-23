import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimariesComponent } from './Primaries.component';

const routes: Routes = [{ path: '', component: PrimariesComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class PrimariesRoutingModule {}
