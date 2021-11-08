import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PagesLayoutComponent } from '@core/layouts/pages-layout/pages-layout.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    PagesLayoutComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    PagesLayoutComponent
  ]
})
export class LayoutsModule { }
