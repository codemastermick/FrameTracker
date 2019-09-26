import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CopyrightComponent } from './copyright.component';

const routes: Routes = [{ path: '', component: CopyrightComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class CopyrightRoutingModule { }
