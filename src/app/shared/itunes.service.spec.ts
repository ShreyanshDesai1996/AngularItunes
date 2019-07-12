/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ItunesService } from './itunes.service';

describe('ItunesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItunesService]
    });
  });

  it('should ...', inject([ItunesService], (service: ItunesService) => {
    expect(service).toBeTruthy();
  }));
});
