import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondariesComponent } from './secondaries.component';

const routes: Routes = [{ path: '', component: SecondariesComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class SecondariesRoutingModule {}
