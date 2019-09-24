import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelicsComponent } from './relics.component';

const routes: Routes = [{ path: '', component: RelicsComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class RelicsRoutingModule {}
