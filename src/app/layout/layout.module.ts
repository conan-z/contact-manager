import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';
import { MainContentComponent } from './main-content/main-content.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    MainContentComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  exports: [
    MainContentComponent,
    SidenavComponent,
    ToolbarComponent
  ]
})
export class LayoutModule {}