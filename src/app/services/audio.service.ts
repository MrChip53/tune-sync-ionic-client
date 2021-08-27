import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio = new Audio();

  constructor() { }

  public pause() {
    this.audio.pause();
  }
  public isPaused() {
    return this.audio.paused;
  }

  public playTune(url: string) {
    if (!this.audio.paused) {
      this.audio.pause();
    }

    this.audio.src = url;

    this.audio.addEventListener('canplaythrough', async (event) => {
      await (event.target as HTMLAudioElement).play();
    });
  }
}
