import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PagesLayoutComponent } from '@core/layouts/pages-layout/pages-layout.component';

@NgModule({
  declarations: [
    PagesLayoutComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    PagesLayoutComponent
  ]
})
export class LayoutsModule { }
