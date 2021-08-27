import { Component } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { AudioService } from '../services/audio.service';

@Component({
  selector: 'app-tunes-tab',
  templateUrl: 'tunes-tab.page.html',
  styleUrls: ['tunes-tab.page.scss']
})
export class TunesPage {

  constructor(public apiService: BackendApiService, public audioService: AudioService) {
    apiService.log();
  }

  public playAudio(url: string) {
    this.audioService.playTune(url);
  };

}
