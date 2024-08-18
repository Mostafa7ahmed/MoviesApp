import { TestBed } from '@angular/core/testing';

import { GetMoviesIdService } from './get-movies-id.service';

describe('GetMoviesIdService', () => {
  let service: GetMoviesIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMoviesIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
