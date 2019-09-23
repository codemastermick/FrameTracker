import { TestBed } from '@angular/core/testing';

import { PrimaryWeaponsService } from './primary-weapons.service';

describe('PrimaryWeaponsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrimaryWeaponsService = TestBed.get(PrimaryWeaponsService);
    expect(service).toBeTruthy();
  });
});
