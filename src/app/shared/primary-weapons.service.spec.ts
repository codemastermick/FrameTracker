import { TestBed } from '@angular/core/testing';

import { PrimaryWeaponsService } from './primary-weapons.service';

describe('PrimaryWeaponsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrimaryWeaponsService = TestBed.get(PrimaryWeaponsService);
    expect(service).toBeTruthy();
  });

  it('should correct Miter', () => {
    const service: PrimaryWeaponsService = TestBed.get(PrimaryWeaponsService);
    const val = service.getThumb('miter.png');
    expect(val.toString()).toContain('miter.png');
  });

  it('should correct Sybaris Prime', () => {
    const service: PrimaryWeaponsService = TestBed.get(PrimaryWeaponsService);
    const val = service.getThumb('sybaris-prime.png');
    expect(val.toString()).toContain('sybaris-prime.png');
  });
});
