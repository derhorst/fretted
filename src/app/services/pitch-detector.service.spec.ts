import { TestBed } from '@angular/core/testing';

import { PitchDetectorService } from './pitch-detector.service';

describe('PitchDetectorService', () => {
  let service: PitchDetectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PitchDetectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
