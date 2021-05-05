import { TestBed } from '@angular/core/testing';

import { RandomImagePathService } from './random-image-path.service';

describe('RandomImagePathService', () => {
  let service: RandomImagePathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomImagePathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
