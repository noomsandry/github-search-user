import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { ToastService } from './toast.service';
import * as _ from 'lodash';

describe('ToastService', () => {
  let toastService: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot([]),
        HttpClientModule
      ]
    });
    toastService = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(toastService).toBeTruthy();
  });

  it('show notification', () => {
    let message = 'Notification message'
    toastService.show(message);
    expect(_.findIndex(toastService.toasts, toast => toast.textOrTpl === message) > -1).toBeTruthy();
  });
});
