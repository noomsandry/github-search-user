import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutsModule } from '@core/layouts/layouts.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    LayoutsModule
  ],
  providers: [],
  bootstrap: [],
  exports: [BrowserModule, LayoutsModule]
})
export class CoreModule { }
