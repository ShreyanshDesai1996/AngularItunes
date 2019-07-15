/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DservService } from './dserv.service';

describe('DservService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DservService]
    });
  });

  it('should ...', inject([DservService], (service: DservService) => {
    expect(service).toBeTruthy();
  }));
});
