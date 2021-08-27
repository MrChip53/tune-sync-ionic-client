import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TunesPage } from './tunes-tab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TunesPageRoutingModule } from './tunes-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TunesPageRoutingModule
  ],
  declarations: [TunesPage]
})
export class TunesPageModule {}
