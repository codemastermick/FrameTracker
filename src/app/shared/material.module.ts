import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatListModule } from '@angular/material/list';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    MatToolbarModule,
     MatButtonModule,
     MatIconModule,
     MatCardModule
    // MatMenuModule,
    // MatSidenavModule,
    // MatListModule,
    // MatGridListModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
    // MatMenuModule,
    // MatSidenavModule,
    // MatListModule,
    // MatGridListModule
  ]
})
export class MaterialModule { }
