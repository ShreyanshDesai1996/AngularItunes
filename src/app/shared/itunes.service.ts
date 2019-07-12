import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { HttpModule, JsonpModule } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

const API = {
  SEARCH: 'https://itunes.apple.com/search?',
  LOOKUP: 'https://itunes.apple.com/lookup?'
};

@Injectable()
export class ItunesService {
  searchTerm = '';

  private _albums = [];
  private _artistId = 0;

  constructor(private jsonp: Jsonp) {}

  public search(searchTerm: string): Promise<any> {
    return this.jsonp
      .get(
        `${
          API.SEARCH
        }callback=JSONP_CALLBACK&media=music&country=US&entity=musicTrack&term=${searchTerm}`
      )
      .toPromise()
      .then(data => data.json().results)
      .catch(this.handleError);
  }

  

  private handleError(error: any): Promise<any> {
    console.log(error);
    return Promise.reject(error.message || error);
  }
}
