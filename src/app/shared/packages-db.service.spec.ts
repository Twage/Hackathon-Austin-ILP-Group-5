import { TestBed } from '@angular/core/testing';

import { PackagesDbService } from './packages-db.service';

describe('PackagesDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PackagesDbService = TestBed.get(PackagesDbService);
    expect(service).toBeTruthy();
  });
});
