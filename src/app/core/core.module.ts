import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutsModule } from '@core/layouts/layouts.module';
import { CoreStoreModule } from './store/core.store.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    LayoutsModule,
    CoreStoreModule
  ],
  exports: []
})
export class CoreModule { }
