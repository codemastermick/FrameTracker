import { TestBed } from '@angular/core/testing';

import { MeleeService } from './melee.service';

describe('MeleeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeleeService = TestBed.get(MeleeService);
    expect(service).toBeTruthy();
  });
});
