import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UserEffects } from '@pages/user/store/user.effect';
import { userReducer } from '@pages/user/store/user.reducer';
@NgModule({
  declarations: [
  ],
  imports: [
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects]),
  ]
})
export class UserStoreModule { }
