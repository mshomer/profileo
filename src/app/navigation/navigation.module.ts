import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { FlexLayoutModule } from '@angular/flex-layout';

import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [
    SidenavComponent,
    SidenavContentComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule,
  ],
  exports: [NavigationComponent],
})
export class NavigationModule {}
