import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { UserRoutingModule } from './user-routing.module';
import { SearchViewComponent } from './containers/search-view/search-view.component';
import { ResultViewComponent } from './containers/result-view/result-view.component';
import { ResultUserListComponent } from './components/result-user-list/result-user-list.component';
import { SearchUserFormComponent } from './components/search-user-form/search-user-form.component';


@NgModule({
  declarations: [
    SearchViewComponent,
    ResultViewComponent,
    ResultUserListComponent,
    SearchUserFormComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }