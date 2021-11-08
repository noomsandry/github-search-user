import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchUserViewComponent } from '@pages/user/containers/search-user-view/search-user-view.component';


const routes: Routes = [
  {
    path: '',
    component: SearchUserViewComponent
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
