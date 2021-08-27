import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TunesPage } from './tunes-tab.page';

const routes: Routes = [
  {
    path: '',
    component: TunesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TunesPageRoutingModule {}
