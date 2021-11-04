import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { UserRoutingModule } from './user-routing.module';
import { SearchUserFormComponent } from './components/search-user-form/search-user-form.component';
import { UserStoreModule } from './store/user.store.module';
import { SearchUserViewComponent } from './containers/search-user-view/search-user-view.component';
import { SearchUserResultComponent } from './components/search-user-result/search-user-result.component';


@NgModule({
  declarations: [
    SearchUserFormComponent,
    SearchUserViewComponent,
    SearchUserResultComponent,
  ],
  imports: [
    UserRoutingModule,
    SharedModule,
    UserStoreModule
  ]
})
export class UserModule { }
