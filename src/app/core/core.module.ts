import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutsModule } from '@core/layouts/layouts.module';
import { CoreStoreModule } from '@core/store/core.store.module';
import { AuthHeaderInterceptor } from '@core/interceptors/header.interceptor';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    LayoutsModule,
    CoreStoreModule,
    HttpClientModule,
  ],
  exports: [  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true,
    },
  ]
})
export class CoreModule { }
