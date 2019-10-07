import { TestBed } from '@angular/core/testing';

import { UsersDbService } from './users-db.service';

describe('UsersDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersDbService = TestBed.get(UsersDbService);
    expect(service).toBeTruthy();
  });
});
