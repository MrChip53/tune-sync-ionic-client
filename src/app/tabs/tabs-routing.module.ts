import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'sync',
        loadChildren: () => import('../sync-tab/sync-tab.module').then(m => m.SyncPageModule)
      },
      {
        path: 'tunes',
        loadChildren: () => import('../tunes-tab/tunes-tab.module').then(m => m.TunesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tunes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tunes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
