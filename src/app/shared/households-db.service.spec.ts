import { TestBed } from '@angular/core/testing';

import { HouseholdsDbService } from './households-db.service';

describe('HouseholdsDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HouseholdsDbService = TestBed.get(HouseholdsDbService);
    expect(service).toBeTruthy();
  });
});
