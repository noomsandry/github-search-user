import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultViewComponent } from './containers/result-view/result-view.component';
import { SearchViewComponent } from './containers/search-view/search-view.component';


const routes: Routes = [
  {
    path: 'search',
    component: SearchViewComponent
  },
  {
    path: 'result',
    component: ResultViewComponent
  },
  {
    path: '**',
    redirectTo: 'search',
  },
  {
    path: '',
    redirectTo: 'search',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
