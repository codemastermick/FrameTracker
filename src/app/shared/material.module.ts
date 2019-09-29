import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatSlideToggleModule
    // MatSidenavModule,
    // MatGridListModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatSlideToggleModule
    // MatSidenavModule,
    // MatGridListModule
  ]
})
export class MaterialModule { }
