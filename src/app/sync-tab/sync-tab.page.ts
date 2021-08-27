import { Component } from '@angular/core';

import { BackendApiService } from '../services/backend-api.service';
import {AudioService} from '../services/audio.service';

@Component({
  selector: 'app-sync-tab',
  templateUrl: 'sync-tab.page.html',
  styleUrls: ['sync-tab.page.scss']
})
export class SyncPage {

  constructor(public apiService: BackendApiService, public audioService: AudioService) {}

}
