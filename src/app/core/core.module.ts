import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutsModule } from '@core/layouts/layouts.module';
import { CoreStoreModule } from '@core/store/core.store.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    LayoutsModule,
    CoreStoreModule,
    HttpClientModule,
  ],
  exports: [  ]
})
export class CoreModule { }
