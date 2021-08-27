import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Tune, Tunes} from '../models/Tune';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  public tunes: Tune[];

  constructor(private httpClient: HttpClient) {

  }

  public getTuneUrl(tune: Tune) {
    return 'http://localhost:9000/tunes/grab/' + tune.id;
  }

  public getProducts(): Observable<Tunes> {

    return this.httpClient.get('http://localhost:9000/tunes') as Observable<Tunes>;

  }

  public log() {
    this.getProducts().subscribe((tunes: Tunes) => {
      this.tunes = tunes.tunes;

      this.tunes.sort((a, b) => a.path.localeCompare(b.path));

    });
  }
}
